# Q.異なるn個のものから2個を選ぶ、重複のない組み合わせを出力するプログラム(chapter01_02メソッド)を作成してください。
def chapter01_02(number)
# 以下にコードを記入
    #.to_aで配列に変換し、.combination(2) で、配列内の要素の中から2つの組み合わせを生成している
      (1..number).to_a.combination(2).to_a
# ここまで
    end
    p chapter01_02(5)

    # 出力[[1,2], [1,3], [1,4], [1,5], [2,3], [2,4], [2,5], [3,4], [3,5], [4,5]]