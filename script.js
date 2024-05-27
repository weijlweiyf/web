document.getElementById('translate-deepl').addEventListener('click', function() {
    const productName = document.getElementById('product-name').value;
    const deeplUrl = `https://www.deepl.com/translator#en/zh/${encodeURIComponent(productName)}`;
    window.open(deeplUrl, '_blank');
});

document.getElementById('translate-google').addEventListener('click', function() {
    const productName = document.getElementById('product-name').value;
    const googleUrl = `https://translate.google.com/?sl=en&tl=zh-CN&text=${encodeURIComponent(productName)}&op=translate`;
    window.open(googleUrl, '_blank');
});
