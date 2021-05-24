function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO], Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebe_m.png')
                document.body.style.background = 'rgb(107, 107, 241)'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem_m.png')
                document.body.style.background = 'rgb(107, 107, 241)'
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'img/adulto_m.png')
                document.body.style.background = 'rgb(107, 107, 241)'
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso_m.png')
                document.body.style.background = 'rgb(107, 107, 241)'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebe_f.png')
                document.body.style.background = '#FC0FC0'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem_f.png')
                document.body.style.background = '#FC0FC0'
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'img/adulto_f.png')
                document.body.style.background = '#FC0FC0'
            } else {
                // Idoso
                img.setAttribute('src', 'img/idosa_f.png')
                document.body.style.background = '#FC0FC0'
            }
        }
        res.style.textAlign = 'center'
        img.style.paddingTop = '15px'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}