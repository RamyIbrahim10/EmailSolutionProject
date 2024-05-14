function changeText1(textId) {
    var newText = "";
    // Depending on which link is clicked, change the text accordingly
    if (textId === 'text1') {
        newText = "For more than 60 years of experience in the field and as one of the region's premier automotive and heavy equipment trading groups, we are distributors for some of the world's leading motor manufacturers, Ford, Suzuki, CASE, UD Trucks, TADANO, Powerscreen, Ferrari cranes, Motorcraft, and have contracts and contacts with all the other motor vehicle manufacturers in the world. From the smallest engine car to the largest articulated tractor and trailer units, we can supply off the shelf or to specific criteria, with facilities and experience to fabricate and adapt to suit every requirement and n ...";
    } else if (textId === 'text2') {
        newText = "Main Office:   The headquarters for the company, this location includes the offices for the top management and all the administrative and support departments, such as the Fleet, Accounting, HR, etc… The main office is located in Mecca Street. Telephone: +962 6 550 6260 Offices Fax: +962 6 550 6270 Mail: P.O. Box: 379 Amman 11118 Jordan Showroom Fax: (+962 6) 550 6273 E-mail: cic@cic.com.jo     Showrooms:   Ford Showroom - Amman  Mecca Street - Alghaith Center - Building no. 169 Tel. : +962 6 400 100 1 Fax. +962 6 550 62 70 Suzuki Showroom - Amman Mecca Street - Hashem al Dawood Complex - Buil ...";
    } else if (textId === 'text3') {
        newText = "CIC was founded in 1947 and was one of the first incorporated companies in the newly independent Hashemite Kingdom of Jordan. Our growth and reputation has grown hand in hand with the development of Jordan as a country, and we are pleased to have reached our 65th year of operations. As one of the oldest Ford dealers in the world having held the franchise since 1947, we take great pride in the brands that we represent and have earned major accolades from many of the manufacturers we are distributers for. The Company was established by Shehadeh Twal senior, and grew into a major trading presenc ...";
    }
    // Update the paragraph text
    document.getElementById('text').innerText = newText;
    // Prevent the default behavior of anchor links
    event.preventDefault();
}

function changeText2(textId, event) {
    var newText = "";
    // Depending on which link is clicked, change the text accordingly
    if (textId === 'text1') {
        newText = "GENUINE SERVICE Why Should You Take Your Vehicle to CIC for Service? You can bring your vehicle to the dealership – no matter what it needs. Whether it's a routine oil change or a more complicated engine repair, there's nowhere else you need to take your vehicle for service. CIC has everything your vehicle needs from the moment you purchase your vehicle to the day you come back for a new one. Our experts and engineers are fully equipped for any service, including: Oil and filter changes. Scheduled maintenance. Tire Replacement and Service. Brake Pad and Shoe Replacement. Air Conditioning. E ...";
    } else if (textId === 'text2') {
        newText = "Motorcraft parts are designed specifically for Ford and Mercury vehicles and have undergone extensive testing to ensure the highest quality of OEM parts in the market. They are designed to maximize the life of your car, truck, van or SUV. Whatever parts you need for the job, we either have it in stock or can get it for you. Ford Motor Company launched this auto parts division in 1972 to provide replacement parts and original equipment parts. Today Motorcraft parts are designed and engineered to fit for installation on Mercury, and Ford vehicles. Some parts, such as Motorcraft's extensive list ...";
    }
    // Update the paragraph text
    document.getElementById('text').innerText = newText;
    // Prevent the default behavior of anchor links
    event.preventDefault();
}


