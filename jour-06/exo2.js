// 2
function calculateAge (birthDateString){
    const today = new Date();
    const birthDate = new Date(birthDateString);
  
    const yearsDifference = today.getFullYear() - birthDate.getFullYear();
  
    if (today.getMonth() < birthDate.getMonth() || today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    {
      return yearsDifference - 1;
    }
  
    return yearsDifference;
}
  
  console.log(calculateAge('1993-01-01'));