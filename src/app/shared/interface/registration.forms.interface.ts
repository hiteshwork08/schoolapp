export interface RegistrationForms {
    userId: string,

    userName: string,

    studentName: string,

    formName: string,

    formStatus: FormStatus,

    submissionDate: string | null,

    assigneeId: string | null,

    assigneeName: string | null,

    assigneeEmail: string | null
}

export type FormStatus = 'incomplete' | 'pending' | 'approved' | 'rejected';