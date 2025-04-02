# 1から引数numberの値までの値を順番に、以下の条件に基づいた出力を返すchapter02_01メソッドを定義してください。
# - 3の倍数の場合は、「"Fizz!"」を返す
# - 5の倍数の場合は、「"Buzz!"」を返す
# - 15の倍数の場合は、「"FizzBuzz!"」を返す
# - 上記以外の場合は、値そのものを返す

def chapter02_01(number)
    (1..number).each do |n|
        # 15を先にする理由は15は3・5の倍数でもあるので先に3・5を書いてしまうと3・5が優先され15が"Fizz!"や"Buzz!"になってしまうから（上のコードが優先されるから）
    if n % 15 == 0
      puts '"FizzBuzz!"'
      elsif n % 3 == 0
        puts '"Fizz!"'
        elsif n % 5 == 0
          puts '"Buzz!"'
          else
            puts n
    end
    end
end
  chapter02_01(20)

# 出力
# 1
# 2
# "Fizz!"
# 4
# "Buzz!"
# "Fizz!"
# 7
# 8
# "Fizz!"
# "Buzz!"
# 11
# "Fizz!"
# 13
# 14
# "FizzBuzz!"
# 16
# 17
# "Fizz!"
# 19
# "Buzz!"