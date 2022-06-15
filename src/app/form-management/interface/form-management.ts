export interface AllFormData {
    forms: FormManagement[]
}

export interface FormManagement {
    formTemplateId: string;
    schoolYear: string;
    formName: string;
    active: boolean;
}