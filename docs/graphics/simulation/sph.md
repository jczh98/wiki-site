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
$\mathbf{f}_i=-\rho\sum_{j!=i}(\frac{p_i}{\rho_i^2}+\frac{p_j}{\rho_j^2})m_j\nabla W(\boldsymbol{r}_i-\boldsymbol{r}_j, h)$

### 沾性力(viscosity force)
$\mathbf{f}_i=\mu\sum_{j!=i}(\mathbf{u}_j-\mathbf{u}_i)\frac{m_j}{\rho_j}\nabla^2W(\boldsymbol{r}_i-\boldsymbol{r}_j, h)$

### 表面张力(surface tension force)
$\mathbf{f}_i=-\sigma\frac{\mathbf{n}_{i}}{\left\|\mathbf{n}_{i}\right\|}\sum_j\frac{m_j}{\rho_j}\nabla^2W(\boldsymbol{r}_i-\boldsymbol{r}_j, h)$

## 核函数
### Poly6
$W(\mathbf{r}, h)=\left\{\begin{array}{ll}{\frac{315}{64 \pi h^{9}}\left(h^{2}-r^{2}\right)^{3}} & {0 \leq r \leq h} \\ {0} & {\text { otherwise }}\end{array}\right.$

适用于插值密度

### Spiky
$W(\mathbf{r}, h)=\left\{\begin{array}{ll}{\frac{15}{\pi h^{6}}(h-r)^{3}\left(r^{2}-\frac{3}{4}\left(h^{2}-r^{2}\right)\right)} & {0 \leq r \leq h} \\ {0} & {\text { otherwise }}\end{array}\right.$

适用于插值压力

### 沾度核
$W(\mathbf{r}, h)=\left\{\begin{array}{ll}{\frac{15}{2 \pi h^{3}}\left(-\frac{r^{3}}{2 h^{3}}+\frac{r^{2}}{h^{2}}+\frac{h}{2 r}-1\right)} & {0 \leq r \leq h} \\ {0} & {\text { otherwise }}\end{array}\right.$

适用于沾性力
