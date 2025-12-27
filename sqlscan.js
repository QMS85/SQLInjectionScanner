async function scanSQLi() {
  const url = document.getElementById('url').value;
  const payloads = ["'", "' OR 1=1", "'; DROP TABLE users; --"];
  const results = [];

  for (let payload of payloads) {
    try {
      const res = await fetch(`${url}${payload}`);
      if (res.ok) results.push(`Potential vulnerability: ${payload}`);
    } catch (e) { /* ignore */ }
  }

  document.getElementById('results').innerHTML = results.join('<br>');
}
