public static void main() {
        generateSequence(13);
    }

    public static void generateSequence(int n) {
        System.out.println(n);
        if (n > 1) {
            if (n % 2 == 0) {
                generateSequence(n / 2);
            } else {
                generateSequence((3 * n) + 1);
            }
        }
    }