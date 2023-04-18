$(document).ready(function () {

    if ($('.course-list').length > 0) {
            let valute = ['eur', 'chf', 'usd', 'jpy', 'dkk', 'rub'];
            $.ajax({
                url: 'https://api.kursna-lista.info/fdf04ba1c8051eb72af01f2504e50117/kursna_lista/jsonp',
                dataType: 'jsonp',
                beforeSend: function () {
                    $('.loading').removeClass('d-none');
                }
            })
                    .done(function (data) {
                        for (let x of valute) {
                            $('.course-list').append(`<li>
                            <img src="./img/flag/${x}.svg"/>
                            <span class="text-uppercase">1 ${x}</span> = 
                            <span>${Number(data.result[x].sre).toFixed(2)}</span>
                            </li><hr>`
                                    );
                        }
                        $('.container').append(`<p class="text-center">Po srednjem kursu NBS na dan ${data.result.date}</p>`);
                       console.log(data);
                    })
                    .fail(function (jqXHR, textStatus) {
                        console.log(jqXHR, textStatus);
                    })
                    .always(function () {
                        $('.loading').addClass('d-none');
                    });
                }

});