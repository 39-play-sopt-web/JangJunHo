function solution(num_list) {
    let answer = 0;
    let a = "";
    let b = "";
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 1) {
            a += num_list[i];   
        } 
        else {
            b += num_list[i];  
        }
    }
    answer = Number(a) + Number(b);
    return answer;
}