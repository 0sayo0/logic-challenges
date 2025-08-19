# TIP CALCULATOR

print("Welcome to tip calculator".upper())
print()

bill = float(input('Enter the bill: '))
tip_percentage = float(input('Enter the tip percentage: '))

if bill < 0 or tip_percentage < 0:
  print("\nValues must be positive\n")

else:
  tip = bill * tip_percentage / 100
  total_bill = bill + tip

  print(f'\nThe tip is: {tip:.2f}') # :.2f ensures the output has exactly two digits after the decimal — ideal for money formatting
  print(f"The total bill is: {total_bill:.2f}")

  print("\nThank you for using de tip calculator!\n") 