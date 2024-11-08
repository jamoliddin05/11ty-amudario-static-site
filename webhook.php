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
file_put_contents('/var/log/github-webhook.log', $payload, FILE_APPEND);

// Execute your deployment script
exec('/home/jamol/webhook-handler.sh 2>&1', $output, $return_var);

// Log output (optional)
file_put_contents('/var/log/github-webhook.log', implode("\n", $output), FILE_APPEND);

// Respond to GitHub
if ($return_var === 0) {
    echo 'Webhook handled successfully';
} else {
    http_response_code(500);
    echo 'Webhook handling failed';
}