console.log(dataList)

let map;
let markerList = [];

function initMap() {

    // マップを生成
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: dataList[0].lat,
            lng: dataList[0].lng
        },
        zoom: 15,
    });

    // InfoWindowを生成
    const infoWindow = new google.maps.InfoWindow();

    for (const data of dataList) {
        // マーカーを生成
        const marker = new google.maps.Marker({
            position: {
                lat: data.lat,
                lng: data.lng
            },
            map: map,
            title: data.name
        });

        markerList.push(marker);

        const liTag = bulidListItem(data);

        liTag.on('click', function () {
            reset();

            $(this).addClass('selected');

            map.panTo({
                lat: data.lat,
                lng: data.lng
            });

            // InfoWindowに表示するHTMLタグを作成する
            const content = buildInfoConstent(data);

            infoWindow.setContent(content);
            infoWindow.open(map, marker);

            marker.setAnimation(google.maps.Animation.BOUNCE);
        });

        marker.addListener('click', function () {
            liTag.click();
        });

        $('ul').append(liTag);

    }

}

// リストの中身を生成
function bulidListItem (data) {
    const imgTag = $('<img>').attr('src', data.img);
    const nameTag = $('<h2>').text(data.name).addClass('name');
    const addressTag = $('<p>').text(data.address).addClass('address');
    const RegularholidayTag = $('<p>').text(data.Regular_holiday).addClass('Regular_holiday');
    const salesTimeAmTag = $('<p>').text(data.sales_time_am).addClass('sales_time_am');
    const salesTimePmTag = $('<p>').text(data.sales_time_pm).addClass('sales_time_pm');

    const liTag = $('<li>').append(imgTag).append(nameTag).append(addressTag).append(RegularholidayTag).append(salesTimeAmTag).append(salesTimePmTag);

    return liTag;
};

function buildInfoConstent (data) {
    const nameTag = $('<h2>').text(data.name).addClass('name');
    const addressTag = $('<p>').text(data.address).addClass('address');
    
    const divTag = $('<div>').append(nameTag).append(addressTag);

    return divTag[0];
};

function reset () {
    $('li').removeClass('selected')
    for (const mark of markerList) {
        mark.setAnimation(null);
    }
};
