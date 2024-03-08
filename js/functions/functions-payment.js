/* 
Imagina que estás desarrollando un programa para una aplicación de gestión de empleados.
Necesitas calcular el salario mensual de un empleado teniendo en cuenta su salario base y los bonos adicionales que pueda recibir según su desempeño.
Las condiciones para calcular el salario son las siguientes:

- Si el empleado ha alcanzado sus objetivos de ventas, recibe un bono del 10 % sobre su salario base.
- Si el empleado ha completado exitosamente un proyecto importante, recibe un bono fijo de $500.
- Si el empleado ha tenido un buen desempeño general, recibe un bono del 5 % sobre su salario base.

Plantea una expresión de función en JavaScript llamada calcularSalarioMensual que tome el salario base del empleado y tres valores booleanos que indiquen si ha alcanzado los objetivos de ventas, completado un proyecto importante y tenido un buen desempeño general respectivamente.
La función debe devolver el salario mensual total, incluyendo los bonos adicionales según las condiciones mencionadas. 
*/

const calculateSalary = (baseSalary, objetivesSale = false, completeProyect = false, goodPerformance = false) => {
    let finalSalary = baseSalary;
    if (objetivesSale) finalSalary += baseSalary*1/10;
    if (completeProyect) finalSalary += 500;
    if (goodPerformance) finalSalary += baseSalary*5/100;
    return finalSalary
}

let baseSalary = 1000;
let finalSalary = calculateSalary(baseSalary, true, false, true);

console.log(`The employee salary was $${baseSalary} and after the payment evaluations is $${finalSalary}`);