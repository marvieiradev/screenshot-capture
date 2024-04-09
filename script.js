document.getElementById('file').addEventListener('change', (e) => {
    var r = new FileReader();
    //Carrega uma imagem do computador, e coloca no container de imagem 
    r.onload = () => {
        document.getElementById('image').src = r.result;
    }
    r.readAsDataURL(e.target.files[0]);
});

document.getElementById('screenshotBtn').addEventListener('click', function () {
    //Esconde esse botão para tirar o screenshot da tela
    this.classList.add('hidden');

    //Tira o screenshot
    html2canvas(document.documentElement, {
        scale: window.devicePixelRatio,
        logging: true,
        useCORS: true,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    }).then(canvas => {
        //Cria uma imagem
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        //Cria um link para download da imagem
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = image;
        link.click();

        //Mostra o botão novamente
        this.classList.remove('hidden');
    });
});

