# Sales Average Calculator

print("Welcome to Sales Average Calculator".upper())

worked_days = int(input("Enter the number of days worked: "))

for day in range(worked_days):
  counter = float(input(f"Enter sales for day {day + 1}: "))

print(f"El total acumulado de ventas es de: {counter}")
