document.getElementById('s-i-3').addEventListener('mouseover',
() => {
    document.getElementById('image-test').src = document.getElementById('s-i-3').getElementsByTagName('img')[0].getAttribute("src");
});

document.getElementById('s-i-4').addEventListener('mouseover', 
() => {
    document.getElementById('image-test').src = document.getElementById('s-i-4').getElementsByTagName('img')[0].getAttribute("src")
});