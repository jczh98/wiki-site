# Smoothed Particle Hydrodynamics
把连续空间划分成体积元$V_j$,每个体积元包含一个粒子,这个粒子的物理量为$A_j$,$A(\mathbf{r})$为空间中处在位置$\mathbf{r}$的粒子的物理量

$A(\mathbf{r})$可以表示为

$A(\mathbf{r})=\sum_j A_j\frac{m_j}{\rho_j}W(\mathbf{r}-\mathbf{r_j},h)$

同理 $\nabla A(\mathbf{r})=\sum_j A_j\frac{m_j}{\rho_j}\nabla W(\mathbf{r}-\mathbf{r_j},h)$
## SPH计算各种物理量
### 密度
$\rho(\mathbf{r_i})=\sum_j m_j W(\mathbf{r}_i-\mathbf{r}_j,h)$
### 表面法线
$\mathbf{n}(\boldsymbol{r})=\sum_j \frac{m_J}{\rho_j}\nabla^2W(\mathbf{r}-\mathbf{r}_j, h)$
### 压力
