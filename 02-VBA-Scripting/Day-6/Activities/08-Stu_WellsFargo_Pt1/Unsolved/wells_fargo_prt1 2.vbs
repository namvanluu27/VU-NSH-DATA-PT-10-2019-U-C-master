Sub WellsFargo_Pt1()

For Each ws in Worksheet
    Dim WorksheetName as String

    WorksheetName = ws.Name

    MsgBox WorksheetName

    Next ws

End Sub