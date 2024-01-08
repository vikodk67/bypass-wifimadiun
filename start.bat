@echo off
echo Bypass by viko dwi kurniawan
echo https://github.com/vikodk67

echo x=msgbox("pastikan terhubung di koneksi wifi pemkot yang tersedia yah yang akan di bypass.",48, "BYPASS") > %tmp%\tmp.vbs
echo x=msgbox("Gunakan secukupnya, tidak diperuntukan bisnis atau keuntungan pribadi",64, "VIKO") > %tmp%\tmp1.vbs
cscript //nologo %tmp%\tmp.vbs
cscript //nologo %tmp%\tmp1.vbs
del %tmp%\tmp.vbs
del %tmp%\tmp1.vbs
  node bypass
@pause