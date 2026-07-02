function LoginValidation(values)
{
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    /*
        Minimum 8 characters: The {8,} quantifier ensures the total length is at least 8 characters.
        At least one number: The (?=.*\d) lookahead ensures there is at least one digit.
        At least one lowercase letter: The (?=.*[a-z]) lookahead ensures there is at least one lowercase letter.
        At least one uppercase letter: The (?=.*[A-Z]) lookahead ensures there is at least one uppercase letter.
        Alphanumeric characters only: The [a-zA-Z0-9] part restricts the entire string to only letters and numbers.
        Important: This specific pattern will fail if the password contains any special characters.
    */

    if(values.email === "")
    {
        error.email = "Email should not be empty";
    }
    else if(!email_pattern.test(values.email))
    {
        error.email = "Email didn't match";
    }
    else
    {
        error.email = "";
    }

    if(values.password === "")
    {
        error.password = "Password should not be empty";
    }
    else if(!password_pattern.test(values.password))
    {
        error.password = "Password didn't match";
    }
    else
    {
        error.password = "";
    }

    return error;
}

export default LoginValidation;