# Q.sortメソッドを利用せず、数字を昇順ソートして出力するプログラム(chapter01_01メソッド)を作成してください。
def chapter01_01(number_array)
# 以下にコードを記載
    #配列の要素分を取得しその要素分繰り返し処理を行う。今回だと4回
         number_array.size.times do
         #配列の要素分から１引いた数つまり3回繰り返し処理を行う。合計4×3=12回
         (number_array.size-1).times do |n|
         #隣同士の数値を比較して左の数値が大きい場合は、配列内の数値の位置を入れ替える
             if number_array[n] > number_array[n + 1]
                tmp = number_array[n]
                number_array[n] = number_array[n + 1]
                number_array[n + 1] = tmp
            end
         end
         end
     p number_array
# ここまで
    end 
    chapter01_01([8, 2, 6, 4])
    
    # 出力[2,4,6,8]