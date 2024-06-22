package recursive;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Factorial {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int input = Integer.parseInt(br.readLine());
		
		//일반재귀
		//일반 재귀는 스택프레임의 증가로 인한 부하 증가 > 스텍 메모리 증가 및 스택 오버플로우 가능성
		System.out.println(factorialRecursive(input));
		
		//꼬리재귀
		//연산을 미루기 때문에 스택프레임이 쌓이는게 아님
		//전제조건 > 컴파일러가 꼬리 재귀 최적화를 지원할 것
		//꼬리 재귀는 정지 조건을 만난 후 현재 함수에서 추가 연산을 요구하지 않도록 구현하는 재귀의 형태이다 > 핵심은 반환(return)부에 연산이 없어야 한다는 점이다
		//문제는 Java 는 꼬리재귀 최적화가 기본적으로 되어 있지 않다는 점 > Java 8의 람다식과 함수형 인터페이스(functional interface)로, 꼬리 재귀와 같은 컨셉을 적용할 수 있음
		System.out.println(factorialTailRecursive(input,input));
		
	}
	
	public static int factorialTailRecursive(int n, int acc) {
		if(n == 1 ) {
			return acc;
		}else {
			return factorialTailRecursive(n-1, acc * (n-1));
		}
	}
	
	public static int factorialRecursive(int n) {
		if(n == 1 ) {
			return n;
		}else {
			return n* factorialRecursive(n-1);
		}
	}

}
