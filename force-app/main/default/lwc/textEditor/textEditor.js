import { LightningElement } from 'lwc';

export default class TextEditor extends LightningElement {
    viewMode = true;
    editMode = false;

    handleEditClick(){
        this.viewMode = false;
        this.editMode = true;
        console.log('handleEditMode');
        console.log('viewMode = ' + this.viewMode);
        console.log('editMode = ' + this.editMode);
    }

    handleViewClick(){
        this.viewMode = true;
        this.editMode = false;
        console.log('handleViewMode');
        console.log('viewMode = ' + this.viewMode);
        console.log('editMode = ' + this.editMode);
    }

    handleSaveClick(){
        // call backend someday
    }
}