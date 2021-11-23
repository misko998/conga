import { LightningElement,api,wire } from 'lwc';
import {getSObjectValue} from '@salesforce/apex';
import getSingleProduct from '@salesforce/apex/getProducts.getSingleProduct';

import NAME from '@salesforce/schema/Product2.Name';
import DESCRIPTION from '@salesforce/schema/Product2.Description__c';
import PRICE from '@salesforce/schema/Product2.Price__c';


const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';


const COLUMNS = [
    {
        label: 'Product Name', fieldName: NAME.fieldApiName, type:'text'
    },
    {
        label: 'Description', fieldName: DESCRIPTION.fieldApiName, type:'text'
    },
    {
        label: 'Price', fieldName: PRICE.fieldApiName, type:'text'
    }

];


export default class ProductList extends LightningElement {
 @api product;
@api selectedProduct;

columns = COLUMNS;
@wire(getSingleProduct) product;


get tileClass(){

    if(this.product.id == this.selectedProduct){
        return TILE_WRAPPER_SELECTED_CLASS;
    }
    return TILE_WRAPPER_UNSELECTED_CLASS;
}

selecrProduct(){
    this.selectedProduct = this.product.Id;
    const prodSelect = new CustomEvent('productSelect',{
        detail:{
            productId: this.selectedProduct
        }
    });
    this.dispatchEvent(prodSelect);
}

}