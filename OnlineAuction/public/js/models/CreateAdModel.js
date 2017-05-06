class CreateAdModel{
    constructor(adTitle, adCategory, adDescription, adImageUrl, adPrice) {
        this.adTitle = adTitle;
        this.adCategory = adCategory;
        this.adDescription = adDescription;
        this.adImageUrl = adImageUrl;
        this.adPrice = adPrice;
    }

    //adTitle
    get adTitle() {
        return this._adTitle;
    }

    set adTitle(filteredTitle) {
        this._adTitle = filteredTitle;
    }

    //adCategory
    get adCategory() {
        return this._adCategory;
    }

    set adCategory(filteredCategory) {
        this._adCategory = filteredCategory;
    }

    //adDescription
    get adDescription() {
        return this._adDescription;
    }

    set adDescription(filteredDesc) {
        this._adDescription = filteredDesc;
    }

    //adImageUrl

    get adImageUrl() {
        return this._adImageUrl;
    }

    set adImageUrl(filteredImgUrl) {
        this._adImageUrl = filteredImgUrl;
    }

    //adPrice

    get adPrice() {
        return this._adPrice;
    }

    set adPrice(filteredPrice) {
        this._adPrice = filteredPrice;
    }
}