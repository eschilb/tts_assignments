
public class HackerrankLambdaExpressions {
	//hackerrank solution for lambda expressions. note that stub code is left out
	  public static PerformOperation isOdd(){
	      return(n) -> { if (n % 2 != 0)
	           return true; 
	          else
	              return false; };
	   }
	
	   public static PerformOperation isPrime() {
	       return(n) -> {
	           if (n < 2) {
	               return false;
	           }
	           int squareRoot = (int) Math.sqrt(n);
	           for (int i = 2; i <=squareRoot; i++) {
	               if (n%i==0) {
	                   return false;
	               }
	           }
	           return true;
	           };
	   }
	
	   public static PerformOperation isPalindrome() {
	       return(n) -> {
	           String original = Integer.toString(n);
	           String reversed = new StringBuilder(Integer.toString(n)).reverse().toString();
	           return original.equals(reversed);
	       };
	   }
	}
}
