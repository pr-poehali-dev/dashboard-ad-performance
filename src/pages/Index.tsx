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
    { title: 'Расходы на рекламу', value: '₽847,392', change: '+12.5%', trend: 'up' },
    { title: 'Клики', value: '24,856', change: '+18.2%', trend: 'up' },
    { title: 'Заявки', value: '1,247', change: '+5.8%', trend: 'up' },
    { title: 'Продажи', value: '₽3,450,000', change: '+15.4%', trend: 'up' },
  ];

  const chartData = [
    { month: 'Янв', spend: 140000, clicks: 4200, leads: 210, sales: 84 },
    { month: 'Фев', spend: 165000, clicks: 4950, leads: 247, sales: 98 },
    { month: 'Мар', spend: 180000, clicks: 5400, leads: 270, sales: 108 },
    { month: 'Апр', spend: 175000, clicks: 5250, leads: 262, sales: 104 },
    { month: 'Май', spend: 190000, clicks: 5700, leads: 285, sales: 114 },
    { month: 'Июн', spend: 205000, clicks: 6150, leads: 307, sales: 123 },
  ];

  const adSources = [
    { name: 'Google Ads', spend: '₽347,392', cpl: '₽680', roas: '4.2x' },
    { name: 'Яндекс.Директ', spend: '₽284,883', cpl: '₽720', roas: '3.8x' },
    { name: 'Facebook Ads', spend: '₽198,472', cpl: '₽590', roas: '4.5x' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold text-foreground">Рекламная аналитика</h1>
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
                  <SelectItem value="all">Все источники</SelectItem>
                  <SelectItem value="google">Google Ads</SelectItem>
                  <SelectItem value="yandex">Яндекс.Директ</SelectItem>
                  <SelectItem value="facebook">Facebook Ads</SelectItem>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="BarChart3" size={20} />
                    <span>Расходы на рекламу</span>
                  </CardTitle>
                  <CardDescription>Рекламный бюджет по месяцам</CardDescription>
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
                              style={{ width: `${(data.spend / 250000) * 100}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-foreground w-20 text-right">
                          ₽{(data.spend / 1000).toFixed(0)}к
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
                    <span>Клики по источникам</span>
                  </CardTitle>
                  <CardDescription>Количество кликов по рекламным каналам</CardDescription>
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
                              style={{ width: `${(data.clicks / 7000) * 100}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-foreground w-16 text-right">
                          {data.clicks}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pie Chart - Ad Sources Distribution */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="PieChart" size={20} />
                    <span>Распределение бюджета</span>
                  </CardTitle>
                  <CardDescription>Доля каждого источника</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-40 h-40">
                      <svg width="160" height="160" viewBox="0 0 42 42" className="w-40 h-40">
                        <circle
                          cx="21"
                          cy="21"
                          r="15.915"
                          fill="transparent"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          strokeDasharray="35 65"
                          strokeDashoffset="25"
                        />
                        <circle
                          cx="21"
                          cy="21"
                          r="15.915"
                          fill="transparent"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeDasharray="28 72"
                          strokeDashoffset="-10"
                        />
                        <circle
                          cx="21"
                          cy="21"
                          r="15.915"
                          fill="transparent"
                          stroke="#8b5cf6"
                          strokeWidth="3"
                          strokeDasharray="20 80"
                          strokeDashoffset="-38"
                        />
                        <circle
                          cx="21"
                          cy="21"
                          r="15.915"
                          fill="transparent"
                          stroke="#f59e0b"
                          strokeWidth="3"
                          strokeDasharray="17 83"
                          strokeDashoffset="-58"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xl font-semibold">₽476к</div>
                          <div className="text-xs text-muted-foreground">Всего</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Google Ads</span>
                      </div>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Яндекс.Директ</span>
                      </div>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Facebook Ads</span>
                      </div>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        <span className="text-sm">Другие</span>
                      </div>
                      <span className="text-sm font-medium">17%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ad Sources Performance */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Award" size={20} />
                  <span>Рекламные источники</span>
                </CardTitle>
                <CardDescription>Эффективность каналов привлечения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {adSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <span className="font-medium text-foreground block">{source.name}</span>
                          <span className="text-sm text-muted-foreground">CPL: {source.cpl}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-foreground">{source.spend}</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          ROAS {source.roas}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Campaign Table */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Target" size={20} />
                  <span>Детализация по кампаниям</span>
                </CardTitle>
                <CardDescription>Подробная статистика эффективности</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-sm font-medium text-muted-foreground">Кампания</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">Расходы</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">Клики</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">Заявки</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">CPL</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">Продажи</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">ROAS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="font-medium">Поиск - Основные услуги</span>
                          </div>
                        </td>
                        <td className="text-right p-3 font-medium">₽185,400</td>
                        <td className="text-right p-3">2,847</td>
                        <td className="text-right p-3">142</td>
                        <td className="text-right p-3">₽1,306</td>
                        <td className="text-right p-3 text-green-600">₽847,200</td>
                        <td className="text-right p-3">
                          <Badge variant="secondary" className="bg-green-100 text-green-700">4.6x</Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-medium">РСЯ - Широкая аудитория</span>
                          </div>
                        </td>
                        <td className="text-right p-3 font-medium">₽98,750</td>
                        <td className="text-right p-3">3,420</td>
                        <td className="text-right p-3">89</td>
                        <td className="text-right p-3">₽1,109</td>
                        <td className="text-right p-3 text-green-600">₽356,000</td>
                        <td className="text-right p-3">
                          <Badge variant="secondary" className="bg-green-100 text-green-700">3.6x</Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="font-medium">Facebook - Ретаргетинг</span>
                          </div>
                        </td>
                        <td className="text-right p-3 font-medium">₽67,200</td>
                        <td className="text-right p-3">1,890</td>
                        <td className="text-right p-3">94</td>
                        <td className="text-right p-3">₽715</td>
                        <td className="text-right p-3 text-green-600">₽423,000</td>
                        <td className="text-right p-3">
                          <Badge variant="secondary" className="bg-green-100 text-green-700">6.3x</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="font-medium">Google - Медийная сеть</span>
                          </div>
                        </td>
                        <td className="text-right p-3 font-medium">₽124,300</td>
                        <td className="text-right p-3">4,150</td>
                        <td className="text-right p-3">76</td>
                        <td className="text-right p-3">₽1,635</td>
                        <td className="text-right p-3 text-green-600">₽304,000</td>
                        <td className="text-right p-3">
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">2.4x</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                        <h4 className="font-medium">Отчет по рекламным расходам</h4>
                        <p className="text-sm text-muted-foreground">Бюджет, клики, конверсии</p>
                      </div>
                      <Button size="sm">Создать</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                      <div>
                        <h4 className="font-medium">Отчет по заявкам</h4>
                        <p className="text-sm text-muted-foreground">Лиды, качество, источники</p>
                      </div>
                      <Button size="sm">Создать</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                      <div>
                        <h4 className="font-medium">Отчет по продажам</h4>
                        <p className="text-sm text-muted-foreground">ROI, конверсии, прибыль</p>
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