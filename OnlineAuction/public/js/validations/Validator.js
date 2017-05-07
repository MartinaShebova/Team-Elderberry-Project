class Validator {

    static validateAd(createAdModel) {
        var adTitleRegexMatch = "/^[a-zA-Z0-9]+$/";
        var adUrlRegexMatch = "/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/";

        if (!createAdModel.adTitle.match(adTitleRegexMatch) &&
            createAdModel.adTitle.length < 10 &&
            createAdModel.adTitle.length >= 80) {

            return {
                TitleHasError: true,
                TitleErrorMessage: 'You can write A-Z, a-z, 0-9, min symbols 10, max symbols 80'
            };
        }

        if (createAdModel.adCategory === 'Select Category') {
            return {
                CategoryHasError: true,
                CategoryErrorMessage: 'Please, choose a valid category'
            };
        }
        if (!createAdModel.adDescription.match(adTitleRegexMatch) &&
            createAdModel.adDescription.length < 10 &&
            createAdModel.adDescription.length >= 200) {

            return {
                adDescriptionHasError: true,
                adDescriptionErrorMessage: 'You can write A-Z, a-z, 0-9, min symbols 10, max symbols 200'
            };
        }

        if(!createAdModel.adImageUrl.match(adUrlRegexMatch)){
            return {
                ImgUrlHasError: true,
                ImgUrlErrorMessage: 'Please, enter a valid url'
            };           
        }

        if(typeof createAdModel.adPrice !== 'number' &&
           createAdModel.adPrice <= 0 || createAdModel.adPrice >= 10000){
            return {
                PriceHasError: true,
                PriceErrorMessage: 'Price must be a positive number to 10000'
            };           
        }
    }
}

export { Validator };