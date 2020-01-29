Sub credit_card()

Dim brand_name As String
Dim brand_total As Double
Dim table_row As Integer

table_row = 2
brand_total = 0

for i = 2 to 101

    If Cells(i + 1, 1).Value <> Cells(i, 1).Value Then

        brand_name = Cells(i,1).Value

        brand_total = brand_total + Cells(i,3).Value

        Range("G" & table_row).Value = brand_name

        Range("H" & table_row).Value = brand_total

        table_row = table_row + 1

        brand_total = 0

    Else

        brand_total = brand_total + (Cells(i,3).Value)

    End If

    Next i

End Sub
