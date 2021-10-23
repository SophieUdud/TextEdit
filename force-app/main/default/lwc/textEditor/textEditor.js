import { LightningElement } from 'lwc';

export default class TextEditor extends LightningElement {
    viewMode = true;
    editMode = false;

    handleEditClick(){
        this.viewMode = false;
        this.editMode = true;
    }

    handleViewClick(){
        this.viewMode = true;
        this.editMode = false;
    }

    handleSaveClick(){
        // call backend someday
    }
}
