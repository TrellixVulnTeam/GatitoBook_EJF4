import { FormGroup } from '@angular/forms';

export function senhaValidator(formGroup: FormGroup) {
  const userName = formGroup.get('userName')?.value ?? '';
  const passowrd = formGroup.get('password')?.value ?? '';

  if (userName.trim() + passowrd.trim()) {
    return userName != passowrd
      ? null
      : {
          senhaIgualUsuario: true,
        };
  } else {
    return null;
  }

}


