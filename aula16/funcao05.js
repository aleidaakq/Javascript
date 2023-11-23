function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial (n-1)
    }
}

console.log(fatorial(9))


/*

5! = 5 * 4 * 3 * 2 * 1 = 120
5! = 5 * 4!

n! = 2 * (n-1) !
1! = 1

*/ 