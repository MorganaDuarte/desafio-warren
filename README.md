## Desafio Warren

<p>Desafios para segunda etapa do processo seletivo Warren.
Os desafios foram escritos em javascript. Para rodar as aplicações é necessário a instalação do NodeJs.

### Desafio 01
<p>A aplicação consiste na impressão de todos os números abaixos de um milhão no qual o número n mais seu reverso resulte em impar. Para rodar esta aplicação basta utilizar diretamente a linha de comando
<p> Linha de comando com node:
<br> $ node desafio01/script

### Desafio 02
<p>A aplicação consiste em determinar se haverá ou não aula de acordo com o número de alunos presentes no horário da aula.
<p> Dois parâmetros devem ser inseridos na linha de comando, número mínimo de alunos presentes na hora de início da aula e o horário de chegada de cada aluno, onde valores inferiores ou igual a zero significa que o aluno chegou no horário.
<p> Os parâmetros devem ser inseridos na linha de comando onde após o nome do programa entrará o número limite e após isso devem ser inseridos os tempos de chegadas.
<p> Os valores de chegada devem ser dividos através de espaço conforme exemplo.
<p> Linha de comando com node:
<br> $ node desafio02/script &ltlimite&gt &lttempo dos alunos&gt 
<p>Exemplo, número mínimo de alunos 3 e valores dos tempos de chegadas = [-1, 0, 2, 5, 8]
<p> Linha de comando com node:
<br>$ node desafio02/script 3 -1 0 2 5 8
<p>Retorno: Aula cancelada