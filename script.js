// Zinc API Code Terminal Language Switcher
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.terminal-tab');
    const codeDisplay = document.getElementById('terminal-code-display');

    const snippets = {
        curl: `<span class="code-comment"># Search products & place automated order via Zinc API</span>
<span class="code-function">curl</span> -X POST https://api.zinc.com/v1/orders \\
  -H <span class="code-string">"Authorization: Bearer znc_live_849204829104"</span> \\
  -H <span class="code-string">"Content-Type: application/json"</span> \\
  -d '{
    <span class="code-keyword">"retailer"</span>: <span class="code-string">"amazon"</span>,
    <span class="code-keyword">"product_id"</span>: <span class="code-string">"B08N5WRWNW"</span>,
    <span class="code-keyword">"max_price"</span>: <span class="code-number">149.99</span>,
    <span class="code-keyword">"shipping_address"</span>: {
      <span class="code-keyword">"first_name"</span>: <span class="code-string">"Alex"</span>,
      <span class="code-keyword">"last_name"</span>: <span class="code-string">"Morgan"</span>,
      <span class="code-keyword">"address_line1"</span>: <span class="code-string">"100 Market St"</span>,
      <span class="code-keyword">"city"</span>: <span class="code-string">"San Francisco"</span>,
      <span class="code-keyword">"state"</span>: <span class="code-string">"CA"</span>,
      <span class="code-keyword">"zip_code"</span>: <span class="code-string">"94105"</span>
    }
  }'`,
        node: `<span class="code-keyword">import</span> { ZincClient } <span class="code-keyword">from</span> <span class="code-string">'@zinc/sdk'</span>;

<span class="code-keyword">const</span> zinc = <span class="code-keyword">new</span> <span class="code-function">ZincClient</span>({ apiKey: process.env.<span class="code-keyword">ZINC_API_KEY</span> });

<span class="code-keyword">const</span> order = <span class="code-keyword">await</span> zinc.orders.<span class="code-function">create</span>({
  retailer: <span class="code-string">'amazon'</span>,
  productId: <span class="code-string">'B08N5WRWNW'</span>,
  maxPrice: <span class="code-number">149.99</span>,
  shippingAddress: {
    firstName: <span class="code-string">'Alex'</span>,
    lastName: <span class="code-string">'Morgan'</span>,
    addressLine1: <span class="code-string">'100 Market St'</span>,
    city: <span class="code-string">'San Francisco'</span>,
    state: <span class="code-string">'CA'</span>,
    zipCode: <span class="code-string">'94105'</span>
  }
});

console.<span class="code-function">log</span>(<span class="code-string">\`Order placed! ID: \${order.id}\`</span>);`,
        python: `<span class="code-keyword">from</span> zinc <span class="code-keyword">import</span> Zinc

client = Zinc(api_key=<span class="code-string">"znc_live_849204829104"</span>)

response = client.orders.<span class="code-function">create</span>(
    retailer=<span class="code-string">"amazon"</span>,
    product_id=<span class="code-string">"B08N5WRWNW"</span>,
    max_price=<span class="code-number">149.99</span>,
    shipping_address={
        <span class="code-string">"first_name"</span>: <span class="code-string">"Alex"</span>,
        <span class="code-string">"last_name"</span>: <span class="code-string">"Morgan"</span>,
        <span class="code-string">"address_line1"</span>: <span class="code-string">"100 Market St"</span>,
        <span class="code-string">"city"</span>: <span class="code-string">"San Francisco"</span>,
        <span class="code-string">"state"</span>: <span class="code-string">"CA"</span>,
        <span class="code-string">"zip_code"</span>: <span class="code-string">"94105"</span>
    }
)

<span class="code-function">print</span>(f<span class="code-string">"Order status: {response.status}"</span>)`
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const lang = tab.getAttribute('data-lang');
            if (snippets[lang] && codeDisplay) {
                codeDisplay.innerHTML = snippets[lang];
            }
        });
    });
});
