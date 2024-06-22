package recursive;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Factorial {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int input = Integer.parseInt(br.readLine());
		
		//�Ϲ����
		//�Ϲ� ��ʹ� ������������ ������ ���� ���� ���� > ���� �޸� ���� �� ���� �����÷ο� ���ɼ�
		System.out.println(factorialRecursive(input));
		
		//�������
		//������ �̷�� ������ ������������ ���̴°� �ƴ�
		//�������� > �����Ϸ��� ���� ��� ����ȭ�� ������ ��
		//���� ��ʹ� ���� ������ ���� �� ���� �Լ����� �߰� ������ �䱸���� �ʵ��� �����ϴ� ����� �����̴� > �ٽ��� ��ȯ(return)�ο� ������ ����� �Ѵٴ� ���̴�
		//������ Java �� ������� ����ȭ�� �⺻������ �Ǿ� ���� �ʴٴ� �� > Java 8�� ���ٽİ� �Լ��� �������̽�(functional interface)��, ���� ��Ϳ� ���� ������ ������ �� ����
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
