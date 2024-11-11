<?php
// Secret key configured in GitHub webhook
$secret = 'test';

// Get the payload and headers
$payload = file_get_contents('php://input');
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

// Verify the signature
$hash = 'sha256=' . hash_hmac('sha256', $payload, $secret);

if (!hash_equals($hash, $signature)) {
    http_response_code(403);
    die('Invalid signature');
}

// Log the payload (optional, for debugging)
file_put_contents(__DIR__ . '/github-webhook.log', $payload, FILE_APPEND);

// Path to webhook-handler.sh in the current directory
$script_path = __DIR__ . '/webhook-handler.sh';

// Execute your deployment script
exec($script_path . ' 2>&1', $output, $return_var);

// Log output (optional)
file_put_contents(__DIR__ . '/github-webhook.log', implode("\n", $output) . "\n", FILE_APPEND);

// Respond to GitHub
if ($return_var === 0) {
    echo 'Webhook handled successfully';
} else {
    http_response_code(500);
    echo 'Webhook handling failed';
}
