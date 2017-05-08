import { Validator } from 'validator';

class CreateAdModel{
    constructor(title, state, description, imageUrl, startPrice) {
        this.title = title;
        this.state = state;
        this.description = description;
        this.startPrice = startPrice;
        this.imageUrl = imageUrl;        
    }

    //adTitle
    get title() {
        return this._title;
    }

    set title(filteredTitle) {

        Validator.validateTitle(filteredTitle);
        this._title = filteredTitle;
    }

    //adCategory
    get state() {
        return this._state;
    }

    set state(filteredCategory) {

        Validator.validateCategory(filteredCategory);
        this._state = filteredCategory;
    }

    //adDescription
    get description() {
        return this._description;
    }

    set description(filteredDesc) {

        Validator.validateDesc(filteredDesc);
        this._description = filteredDesc;
    }

    //adUrl
    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(filteredImgUrl) {

        Validator.validateUrl(filteredImgUrl);
        this._imageUrl = filteredImgUrl;
    }

    //adPrice

    get startPrice() {
        return this._startPrice;
    }

    set startPrice(filteredPrice) {

        Validator.validatePrice(filteredPrice);
        this._startPrice = filteredPrice;
    }
}

export { CreateAdModel };