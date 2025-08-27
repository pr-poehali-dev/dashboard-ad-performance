import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const metrics = [
    { title: 'Общий доход', value: '₽2,847,392', change: '+12.5%', trend: 'up' },
    { title: 'Новые пользователи', value: '14,256', change: '+8.2%', trend: 'up' },
    { title: 'Конверсия', value: '3.47%', change: '-2.1%', trend: 'down' },
    { title: 'Средний чек', value: '₽1,847', change: '+5.4%', trend: 'up' },
  ];

  const chartData = [
    { month: 'Янв', revenue: 240000, users: 1200, conversion: 3.2 },
    { month: 'Фев', revenue: 280000, users: 1400, conversion: 3.5 },
    { month: 'Мар', revenue: 320000, users: 1600, conversion: 3.8 },
    { month: 'Апр', revenue: 290000, users: 1450, conversion: 3.3 },
    { month: 'Май', revenue: 350000, users: 1750, conversion: 4.1 },
    { month: 'Июн', revenue: 380000, users: 1900, conversion: 4.2 },
  ];

  const topProducts = [
    { name: 'Премиум подписка', sales: '₽847,392', growth: '+18.2%' },
    { name: 'Стандарт план', sales: '₽524,883', growth: '+12.1%' },
    { name: 'Базовый пакет', sales: '₽298,472', growth: '+8.7%' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold text-foreground">Аналитика</h1>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Live
              </Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">7 дней</SelectItem>
                  <SelectItem value="30d">30 дней</SelectItem>
                  <SelectItem value="90d">3 месяца</SelectItem>
                  <SelectItem value="1y">Год</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="subscriptions">Подписки</SelectItem>
                  <SelectItem value="products">Товары</SelectItem>
                  <SelectItem value="services">Услуги</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-6">
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            <TabsTrigger value="reports">Отчеты</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{metric.title}</p>
                        <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                      </div>
                      <div className={`flex items-center space-x-1 ${
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-500'
                      }`}>
                        <Icon 
                          name={metric.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                          size={16} 
                        />
                        <span className="text-sm font-medium">{metric.change}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="BarChart3" size={20} />
                    <span>Динамика дохода</span>
                  </CardTitle>
                  <CardDescription>Помесячная статистика за полугодие</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {chartData.map((data, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground w-12">{data.month}</span>
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-secondary rounded-full h-3">
                            <div 
                              className="bg-primary h-3 rounded-full transition-all duration-500"
                              style={{ width: `${(data.revenue / 400000) * 100}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-foreground w-20 text-right">
                          ₽{(data.revenue / 1000).toFixed(0)}к
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* User Growth */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Users" size={20} />
                    <span>Рост пользователей</span>
                  </CardTitle>
                  <CardDescription>Новые регистрации по месяцам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {chartData.map((data, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground w-12">{data.month}</span>
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-secondary rounded-full h-3">
                            <div 
                              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${(data.users / 2000) * 100}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-foreground w-16 text-right">
                          {data.users}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Products */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Award" size={20} />
                  <span>Топ продукты</span>
                </CardTitle>
                <CardDescription>Лидеры продаж за выбранный период</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-medium text-foreground">{product.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-foreground">{product.sales}</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {product.growth}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="FileText" size={20} />
                  <span>Генерация отчетов</span>
                </CardTitle>
                <CardDescription>Создавайте и экспортируйте детальные отчеты</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Icon name="Download" size={20} />
                    <span>Экспорт в Excel</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Icon name="FileText" size={20} />
                    <span>PDF отчет</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Icon name="Mail" size={20} />
                    <span>Отправить по почте</span>
                  </Button>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold mb-4">Готовые шаблоны</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                      <div>
                        <h4 className="font-medium">Финансовый отчет</h4>
                        <p className="text-sm text-muted-foreground">Доходы, расходы, прибыль</p>
                      </div>
                      <Button size="sm">Создать</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                      <div>
                        <h4 className="font-medium">Отчет по пользователям</h4>
                        <p className="text-sm text-muted-foreground">Активность, регистрации, сегменты</p>
                      </div>
                      <Button size="sm">Создать</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                      <div>
                        <h4 className="font-medium">Продуктовая аналитика</h4>
                        <p className="text-sm text-muted-foreground">Продажи по категориям и товарам</p>
                      </div>
                      <Button size="sm">Создать</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;