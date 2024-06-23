import java.util.*;

class Fibonachi{
    static int[] fiboArr;
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int arrLength = in.nextInt();
        fiboArr = new int[arrLength+1];
        
        bfs(10);
        for(int i = 1 ; i <= arrLength ; i++){
            System.out.print(fiboArr[i] + " ");
        }
    }

    static int bfs(int n){
        if(n == 1){
            return fiboArr[1] = 1;
        }else if(n == 2){
            return fiboArr[2] = 1;
        }else{
            return fiboArr[n] = bfs(n-2) + bfs(n-1);
        }
    }

}
