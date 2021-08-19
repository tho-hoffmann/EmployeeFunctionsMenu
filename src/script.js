/*
    Desafio - Módulo 1

    1. Retornar o nome do funcionário que tem o maior salário da empresa.
    2. Retornar o nome do funcionário que tem o menor salário da empresa.
    3. Retornar a média salarial da empresa.
    4. Receber um setor como parâmetro e retornar o funcionário de maior salário do setor informado.
    5. Receber um setor como parâmetro e retornar o funcionário de menor salário do setor informado.
    6. Receber um setor como parâmetro e retornar a média salarial do setor informado.
*/
var fs = require("fs");
var readLine = require("readline");

var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Salva todo conteúdo JSON em uma váriavel
var listEmployees = require("./funcionarios.json");

function menu(){
    rl.question("-> Digite a opção desejada: ", function(choice){
        choice = parseInt(choice);

        switch (choice) {
            case 1:
                highestSalary();
                console.log("\n");
                menu();
                break;
            case 2:
                lowestSalary();
                console.log("\n")
                menu();
                break;
            case 3:
                averageWage();
                console.log("\n")
                menu();
                break;
            case 4:
                rl.question("  -> Informe o setor:", function(department){
                    department = parseInt(department);

                    switch (department){
                        case 1:
                            highestSalaryDepartment(department);
                            console.log("\n");
                            menu();
                            break;
                        case 2:
                            highestSalaryDepartment(department);
                            console.log("\n");
                            menu();
                            break;
                        case 3:
                            highestSalaryDepartment(department);
                            console.log("\n");
                            menu();
                            break;
                        default:
                            console.log("   Opção inválida, recomece!");
                            console.log("\n")
                            menu();
                    }   
                }); 
                break;
            case 5:
                rl.question("  -> Informe o setor:", function(department){
                    department = parseInt(department);

                    switch (department){
                        case 1:
                            lowestSalaryDepartment(department);
                            console.log("\n");
                            menu();
                            break;
                        case 2:
                            lowestSalaryDepartment(department);
                            console.log("\n");
                            menu();
                            break;
                        case 3:
                            lowestSalaryDepartment(department);
                            console.log("\n");
                            menu();
                            break;
                        default:
                            console.log("   Opção inválida, recomece!");
                            console.log("\n")
                            menu();
                    }   
                });    
            break;
            case 6:
                rl.question("  -> Informe o setor:", function(department){
                    department = parseInt(department);

                    switch (department){
                        case 1:
                            averageWageDepartment(department);
                            console.log("\n");
                            menu();
                            break;
                        case 2:
                            averageWageDepartment(department);
                            console.log("\n");
                            menu();
                            break;
                        case 3:
                            averageWageDepartment(department);
                            console.log("\n");
                            menu();
                            break;
                        default:
                            console.log("   Opção inválida, recomece!");
                            console.log("\n")
                            menu();
                    }   
                });
                break;
            case 7:
                rl.close();
                break;
            default:
                console.log("   Tente novamente!");
                console.log("\n")
                menu();
        }
    }); 
}

// 1. Maior salário
function highestSalary(){
    var salary = 0;
    var id = 0;

    for(var i = 0; i < listEmployees.funcionarios.length; i++){
        if(listEmployees.funcionarios[i].salario > salary){
            salary = listEmployees.funcionarios[i].salario;
            id = i;
        }  
    }
    console.log("   Resposta 1: Maior salário da empresa é: " + salary + " do/a " + listEmployees.funcionarios[id].nome);
}

// 2. Menor salário;
function lowestSalary(){
    var salary = listEmployees.funcionarios[0].salario;
    var id = 0;

    for(var i = 0; i < listEmployees.funcionarios.length; i++){
        if(listEmployees.funcionarios[i].salario < salary){
            salary = listEmployees.funcionarios[i].salario;
            id = i;
        }  
    }
    console.log("   Resposta 2: Menor salário da empresa é: " + salary + " do/a " + listEmployees.funcionarios[id].nome);
}

// 3. Média salarial
function averageWage(){
    var salary = 0;
    var average = 0;

    for(var i = 0; i < listEmployees.funcionarios.length; i++){
            salary += listEmployees.funcionarios[i].salario;
    }
    average = salary / (listEmployees.funcionarios.length);
    console.log("   Resposta 3: Média salarial da empresa é: " + Math.round(average));
}

// 4. Funcionário com maior salário de tal setor
function highestSalaryDepartment(department){
    var salary = 0;
    var id = 0;
    var func = "";

    if(department === 1){
        func = "Administrativo";
    }else if(department === 2){
        func = "Comercial";
    }else{
        func = "Produção";
    }

    for(var i = 0; i < listEmployees.funcionarios.length; i++){
        if(listEmployees.funcionarios[i].setor == func){
            if(listEmployees.funcionarios[i].salario > salary){
                salary = listEmployees.funcionarios[i].salario;
                id = i;
            }  
        }
    }
    console.log("     Resposta 4: Maior salário do setor " + func + " é: " + salary + " do/a " + listEmployees.funcionarios[id].nome);
}

// 5. Funcionário com menor salário de tal setor
function lowestSalaryDepartment(department){
    var salary = listEmployees.funcionarios[0].salario;
    var id = 0;
    var func = "";

    if(department === 1){
        func = "Administrativo";
    }else if(department === 2){
        func = "Comercial";
    }else{
        func = "Produção";
    }

    for(var i = 0; i < listEmployees.funcionarios.length; i++){
        if(listEmployees.funcionarios[i].setor == func){
            if(listEmployees.funcionarios[i].salario < salary){
                salary = listEmployees.funcionarios[i].salario;
                id = i;
            } 
        } 
    }
    console.log("   Resposta 5: Menor salário do setor " + func + " é: " + salary + " do/a " + listEmployees.funcionarios[id].nome);
}

// 6. Média salarial de tal setor
function averageWageDepartment(department){
    var salary = 0;
    var employees = 0;
    var averageDepartment = 0;
    var func = "";

    if(department === 1){
        func = "Administrativo";
    }else if(department === 2){
        func = "Comercial";
    }else{
        func = "Produção";
    }

    for(var i = 0; i < listEmployees.funcionarios.length; i++){
        if(listEmployees.funcionarios[i].setor === func){
            employees ++;
            salary += listEmployees.funcionarios[i].salario;
        }    
    }
    averageDepartment = salary / (employees);
    console.log("   Resposta 6: Média salarial do setor " + func +" é: " + Math.round(averageDepartment));
}

(function main(){
    console.log(" ________________________________________________");
    console.log("|                     DESAFIO 1                  |");
    console.log("| 1. Maior salário;                              |");
    console.log("|                                                |");
    console.log("| 2. Menor salário;                              |");
    console.log("|                                                |");
    console.log("| 3. Média salarial;                             |");
    console.log("|                                                |");
    console.log("| 4. Funcionário com maior salário de tal setor; |");
    console.log("|    (1)administrativo (2)comercial (3)Produção  |");
    console.log("|                                                |");
    console.log("| 5. Funcionário com menor salário de tal setor; |");
    console.log("|    (1)administrativo (2)comercial (3)Produção  |");
    console.log("|                                                |");
    console.log("| 6. Média salarial de tal setor;                |");
    console.log("|    (1)administrativo (2)comercial (3)Produção  |");
    console.log("|                                                |");
    console.log("| 7. Sair;                                       |");
    console.log("|________________________________________________|");
    menu();
})();