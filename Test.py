import matplotlib.pyplot as plt
import numpy as np

# สร้างข้อมูลตัวอย่าง
x = np.linspace(0, 10, 100)  # 100 จุดจาก 0 ถึง 10
y = np.sin(x)  # ค่า y คือ sine ของค่า x

# สร้างกราฟ
plt.plot(x, y, label='sin(x)', color='blue', linestyle='-', linewidth=2)

# เพิ่มชื่อแกน
plt.xlabel('X Axis')
plt.ylabel('Y Axis')

# เพิ่มชื่อกราฟ
plt.title('กราฟของฟังก์ชัน sin(x)')

# แสดงคำอธิบาย (legend)
plt.legend()

# แสดงกราฟ
plt.show()
