import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  password = '';

  onChangeUseLetters()
  {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers()
  {
    this.includeNumbers = !this.includeNumbers;
  }
  
  onChangeUseSymbols()
  {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: Event) //value:string
  {
    const target = event.target as HTMLInputElement; //?
    const parsedValue = parseInt(target.value) //?
    if (!isNaN(parsedValue)) //?
    {
      this.length = parsedValue;
    }
  }
  onButtonClick()
  {
    /*
    console.log(`About to generate a password with the following: 
    Includes Letters: ${this.includeLetters}
    Includes Numbers: ${this.includeNumbers}
    Includes Symbols: ${this.includeSymbols}   
    `);
    */
    let validChars = '';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';
    if (this.includeLetters)
    {
      validChars += letters;
    }
    if (this.includeNumbers)
    {
      validChars += numbers;
    }
    if (this.includeSymbols)
    {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0; i<this.length; i++ )
    {
      const index = Math.floor(Math.random() * validChars.length); //Math.floor rounds the number to an integer and Math.random generates a random number 
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

}
