///    <reference types='../@types/jquery'/>

let currentImage;
let currentTitle;
let currentDetails;

const body = document.body

// $(body).on('keydown', (e) => {
//     console.log(e);
// })

body.addEventListener('keydown', (e) => {

    if ($('.lightbox-container').hasClass('d-flex')) {
        if (e.key == 'ArrowRight') {
            slide(1)
        }
        else if (e.key == 'ArrowLeft') {
            slide(-1)
        }
        else if (e.key == 'Escape') {
            close()
        }
    }


})

$('.c-pre .image').on('click', (e) => {
    $('.lightbox-container').toggleClass('d-none d-flex')
    // Image Src I've clicked
    const imgSrc = e.target.getAttribute('src')
    $('.lightbox-item .content').css('backgroundImage', `url(${imgSrc})`)
    // Title Of Card I've clicked
    const title = $(e.target).parent().next().find('.card-title');
    $('#titlePre').text(title.text())
    // Details Of Card I've clicked
    const details = $(e.target).parent().next().find('.card-details');
    $('#detailsPre').text(details.text())

    // Index Of Image I've Clicked
    currentImage = $('.scale').index(e.target)

    // Index Of Title I've Clicked
    currentTitle = $('.portfolio .card-b .card-title').index(title)

    // Index Of Details I've Clicked
    currentDetails = $('.portfolio .card-b .card-details').index(details)
})

$('#close').on('click', () => {
    close()
})


$('#next').on('click', () => {
    slide(1);
})
$('#prev').on('click', () => {

    slide(-1);
})


$('.lightbox-container ').on('click', (e) => {
    console.log(e.target);
    close()
})


$('.lightbox-container .lightbox-item').on('click', (e) => {
    e.stopImmediatePropagation()
})


function close() {
    $('.lightbox-container').toggleClass('d-flex d-none')
}

function slide(step) {

    const allImagesLength = $('.c-pre .image').length;

    currentImage = (currentImage + step + allImagesLength) % allImagesLength;
    currentTitle = (currentTitle + step + allImagesLength) % allImagesLength;
    currentDetails = (currentDetails + step + allImagesLength) % allImagesLength;
    console.log(currentImage);
    const imgSrc = $('.scale')[currentImage].getAttribute('src');
    // Next Image Src I've clicked
    $('.lightbox-item .content').css('backgroundImage', `url(${imgSrc})`)

    // Next Title Of Card I've clicked

    const title = $('.portfolio .card-b .card-title')[currentTitle];
    $('#titlePre').text($(title).text())

    // Next Details Of Card I've clicked
    const details = $('.portfolio .card-b .card-details')[currentDetails];
    $('#detailsPre').text($(details).text())

}