import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ValidateFn } from 'mongoose';
import { RateOptions } from '../rate/rate.component';

export function checkRegExp(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = regExp.test(control.value);
        return !forbidden ? {forbiddenValue: {value: control.value}} : null;
    }
}

export const conformPassword: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    return control.value.password_one === control.value.password_two ? null : { PasswordDoNotMatch: true}
}

interface TemplateFormI {
    login: string,
    email: string,
    password: string,
}


@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss'
})

export class FormsComponent implements OnInit {

    public templateForm: TemplateFormI = {
        login: 'Robi',
        email: '',
        password: ''
    }

    constructor(private _fb: FormBuilder) {}

    public get skills(): FormArray {
        return this.fbForm.get('skills') as FormArray
    }

    public myForm = new FormGroup({
        login: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
    })

    public validatorsForm = new FormGroup({
        mail: new FormControl('', checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)),
        password_one: new FormControl(''),
        password_two: new FormControl('')
    },
    conformPassword
    );

    public fbForm = this._fb.group({
        name: ['Robi'],
        skills: this._fb.array([]),
    })

    public customForm = this._fb.group({
        rate: [4]
    })

    public ratesOptions: RateOptions = {
        rates: 10,
        text: 'Rate'
    }

    public ngOnInit(): void {
        
    }

    public handleValue() {
        if(this.myForm.valid) {
            console.log(this.myForm.value);
        } else{
            alert('No Valid')
        }
    }

    public newSkills(): FormGroup {
        return this._fb.group({
            skill: '',
            expirience: '',
        })
    }

    public addSkill(): void {
        this.skills.push(this.newSkills())
    }

    public removeSkill(i: number): void {
        this.skills.removeAt(i)
    }

    public onSubmit() {
        console.log(this.fbForm.value);
    }

}