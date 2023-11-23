// Navigation Buttons


document.addEventListener("DOMContentLoaded", function() {
    // audio and story components
    const siteAudio = document.getElementById("siteAudio");
    const historia_section = document.getElementById("historia-contentContainer");
    const historia_exit = document.getElementById("nH-historiaExit");
    console.log("Historia lista");
        // Story start log
        
        // Audio start log
    setTimeout( () => {
        siteAudio.play();
        historia_section.showModal();
        console.log("Historia actualizada");
        console.log("Humbe - Seratonina (play)");
    }, 2000);

    historia_exit.addEventListener("click", () => {
        historia_section.close();
        console.log("historia cerrada");
    });
    
});

const image_array1 =
[
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214740&authkey=%21AA3AN7t4dZ85bTI&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214739&authkey=%21AIalChaSvq1nQQM&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214743&authkey=%21AJu8S0ym7TXqEN8&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214738&authkey=%21AAZhxqj2A1aBY3E&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214736&authkey=%21AD-FAPxMOFjONXM&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214735&authkey=%21AAycvApk8Sm-D00&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214733&authkey=%21AF3Zc-KfHpyHS4E&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214728&authkey=%21AA-El813q4ylWtY&width=2316&height=3088',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214727&authkey=%21AK6q2cVMd-awSuQ&width=2316&height=3088',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214726&authkey=%21AGdAvu7iztuhSOQ&width=2316&height=3088',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214714&authkey=%21AIQRG9_L7Etiqbs&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214712&authkey=%21AFK5Rtmm2NV5UfA&width=1600&height=1200',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214707&authkey=%21AIGZsZ1zCQsY1n8&width=750&height=1256',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214705&authkey=%21AHltP3oGk0kO4fU&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214706&authkey=%21AJjcbK1k1GpuvjE&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214704&authkey=%21AGLFx-j-Jqq5reM&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214701&authkey=%21AE07fZ4hsZTo5CA&width=768&height=1024',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214700&authkey=%21AAo9Tw8mMDuz2vY&width=768&height=1024',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214695&authkey=%21AJcQhfGqH7zQh6w&width=3024&height=4032',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214692&authkey=%21AHQfUiN8EavxKAQ&width=3024&height=4032',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214696&authkey=%21AGaEooN4RC8WzuM&width=3024&height=4032',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214694&authkey=%21ACTz4VB1AzeA6D0&width=3024&height=4032',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214693&authkey=%21AJ6IzYsFHWfDhGo&width=3024&height=4032',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214687&authkey=%21AAEISW6gBgHYDU0&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214685&authkey=%21AF85mLpZekhE0rU&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214677&authkey=%21AA9CKfe9aVSU5Ew&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214682&authkey=%21AMlSVUW8nwR9V7Q&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214683&authkey=%21AFz1wpwd0FLXsOU&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214684&authkey=%21AMJa3tHWaKxgSqk&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214679&authkey=%21AMqj8Asv0xsECjg&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214678&authkey=%21AEbfeDPbltwML1U&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214676&authkey=%21ADvERMYU93uePR4&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214673&authkey=%21ADEYlxTTsaTTclM&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214674&authkey=%21AGGxm69I04GqUBA&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214672&authkey=%21ACWeUA4ODKMOMns&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214675&authkey=%21AJCPXGqfX1fKwzs&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214669&authkey=%21ADssN3tlmBdWgDM&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214668&authkey=%21APVwZOFsUBn9hss&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214666&authkey=%21AMPnNfw5nPKYjsk&width=768&height=1024',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214680&authkey=%21AHd1XmgjSwpM0m4&width=2316&height=3088',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214671&authkey=%21AKApxVyZHiC7fg8&width=3024&height=4032',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214670&authkey=%21AJatLA3pcq6EH90&width=3024&height=4032',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214656&authkey=%21AOsfeyJI-fBK2Tg&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214657&authkey=%21AABzgJiGpxIDlNc&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214653&authkey=%21AOBXAPwdZJKvzqw&width=576&height=1024',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214650&authkey=%21AFkCVWJ4KbEr0Dk&width=576&height=1024',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214658&authkey=%21ACHkjM6DYsvBHog&width=2316&height=3088',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214655&authkey=%21APRVsue61F39WuU&width=2316&height=3088',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214652&authkey=%21AJwVHlBZCNWCb14&width=2316&height=3088',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214648&authkey=%21AAW_scO-_zOX5hI&width=2316&height=3088',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214630&authkey=%21AFhmzQJjm9I8-JU&width=576&height=1024',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214631&authkey=%21ANip79ewoZU9zMk&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214633&authkey=%21AKFqASF2NskWL3s&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214626&authkey=%21AJazUPtsy0ZTvfQ&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214620&authkey=%21APTgyQ0j7ZpM6_g&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214623&authkey=%21ALcb7NtPyygF-xE&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214619&authkey=%21AAyPCOWn3jHML-g&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214624&authkey=%21AFIkgVMx36RvReo&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214618&authkey=%21AM1KdQTz3TaPdmM&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214622&authkey=%21AFNL6fNEHYMt_ms&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214621&authkey=%21ABk9BUDmDiVOFQk&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214625&authkey=%21AFcvICYxm6xoBaw&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214617&authkey=%21APsPlY2aw2u7g74&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214616&authkey=%21AG8Z6DBtMI9a4Vo&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214628&authkey=%21AMGo2fd23GGr2DM&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214598&authkey=%21AM0KH56bpldAJPc&width=576&height=1024',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214600&authkey=%21AGoFv2JpUAsP1pY&width=900&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214595&authkey=%21ACToXaAuqbqK_MI&width=1200&height=1600',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214594&authkey=%21AEP-DVRbEn-7nzc&width=750&height=1333',
    'https://onedrive.live.com/embed?resid=7C7DCCC750F7E5B%214593&authkey=%21AE0RrZaLc8PUtFU&width=900&height=1600'
];

function get_rImage() {
    const rIndex = Math.floor(Math.random()*image_array1.length);
    const sImage = image_array1[rIndex]

    if (rIndex !== Number(localStorage.getItem('index'))) {
        localStorage.setItem('index', rIndex);
    } else {
        get_rImage();
    }
    const img = new Image();
    img.src = sImage;
    img.style.border = "0.1em solid #5A0001";
    img.style.padding = "0.5em";
    img.style.borderRadius = "0.5em";
    img.style.backdropFilter = "blur(2em)";
    
    setTimeout( () => {
        const plane = document.getElementById('imageHolder');
        plane.appendChild(img);
        console.log('image loaded');

        setTimeout( () => {
            plane.removeChild(img);
        }, 9000);
        console.log('image removed');
    }, 2000);
    
    
}
