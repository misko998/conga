import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import COLOR from '@salesforce/schema/Product2.Color__c';
import DIMENSION from '@salesforce/schema/Product2.Dimension__c';
import SIZE from '@salesforce/schema/Product2.Size__C';
import { APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe } from 'lightning/messageService';


const PRODUCT_FIELDS = [COLOR,DIMENSION];

//import pmc from '@salesforce/messageChannels/'



export default class ProductDetails extends LightningElement {}