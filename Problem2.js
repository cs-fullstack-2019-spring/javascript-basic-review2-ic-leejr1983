// Problem 2:
// Print all even numbers from a user's given start and stop number.

start_number = parseInt(prompt ("Please enter your start number"))
stop_number = parseInt(prompt ("Please enter your stop number"))

for ( i = start_number; i <= stop_number; i+=2)
{
    console.log(i)
}