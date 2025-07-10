'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    bedrijfsnaam: '',
    contactpersoon: '',
    telefoonnummer: '',
    email: '',
    typeZorginstelling: '',
    aantalLocaties: '',
    aantalBeveiligers: '',
    gewensteInzet: [] as string[],
    voorkeursmoment: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleGewensteInzetChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      gewensteInzet: checked 
        ? [...prev.gewensteInzet, value]
        : prev.gewensteInzet.filter(item => item !== value)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/verstuur-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          bedrijfsnaam: '',
          contactpersoon: '',
          telefoonnummer: '',
          email: '',
          typeZorginstelling: '',
          aantalLocaties: '',
          aantalBeveiligers: '',
          gewensteInzet: [],
          voorkeursmoment: ''
        })
      } else {
        throw new Error('Er is iets misgegaan bij het versturen van het formulier.')
      }
    } catch {
      // setSubmitError('Er is iets misgegaan bij het versturen van het formulier. Probeer het later opnieuw.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <section id="intake-form" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="text-green-600 text-6xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bedankt voor je aanvraag!
              </h2>
              <p className="text-gray-700">
                We nemen binnen 24 uur contact met je op.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="intake-form" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Vraag direct een voorstel aan
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Vul het formulier in en ontvang binnen 24 uur een vrijblijvend voorstel
          </p>
          
          {/* Urgency banner */}
          <div className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded text-sm font-normal mb-4 border border-yellow-100">
            Beperkte beschikbaarheid – plan nu uw gratis intakegesprek
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Vrijblijvend voorstel</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Reactie binnen 24 uur</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Gratis intakegesprek</span>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">
              Intakeformulier zorgbewaking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Bedrijfsnaam */}
              <div className="space-y-2">
                <Label htmlFor="bedrijfsnaam">Bedrijfsnaam *</Label>
                <Input
                  id="bedrijfsnaam"
                  value={formData.bedrijfsnaam}
                  onChange={(e) => handleInputChange('bedrijfsnaam', e.target.value)}
                  required
                />
              </div>

              {/* Contactpersoon */}
              <div className="space-y-2">
                <Label htmlFor="contactpersoon">Contactpersoon *</Label>
                <Input
                  id="contactpersoon"
                  value={formData.contactpersoon}
                  onChange={(e) => handleInputChange('contactpersoon', e.target.value)}
                  required
                />
              </div>

              {/* Telefoonnummer */}
              <div className="space-y-2">
                <Label htmlFor="telefoonnummer">Telefoonnummer *</Label>
                <Input
                  id="telefoonnummer"
                  type="tel"
                  value={formData.telefoonnummer}
                  onChange={(e) => handleInputChange('telefoonnummer', e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mailadres *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              {/* Type zorginstelling (handmatig) */}
              <div className="space-y-2">
                <Label htmlFor="typeZorginstelling">Type zorginstelling</Label>
                <Input
                  id="typeZorginstelling"
                  value={formData.typeZorginstelling}
                  onChange={(e) => handleInputChange('typeZorginstelling', e.target.value)}
                  placeholder="Bijv. verpleeghuis, GGZ, woonzorg, ziekenhuis, anders"
                />
              </div>

              {/* Aantal locaties */}
              <div className="space-y-2">
                <Label htmlFor="aantalLocaties">Aantal locaties *</Label>
                <Input
                  id="aantalLocaties"
                  type="number"
                  min="1"
                  value={formData.aantalLocaties}
                  onChange={(e) => handleInputChange('aantalLocaties', e.target.value)}
                  required
                />
              </div>

              {/* Aantal beveiligers per dienst */}
              <div className="space-y-2">
                <Label htmlFor="aantalBeveiligers">Aantal beveiligers per dienst</Label>
                <Input
                  id="aantalBeveiligers"
                  type="number"
                  min="1"
                  value={formData.aantalBeveiligers}
                  onChange={(e) => handleInputChange('aantalBeveiligers', e.target.value)}
                />
              </div>

              {/* Gewenste inzet */}
              <div className="space-y-3">
                <Label>Gewenste inzet</Label>
                <div className="space-y-2">
                  {['Dag', 'Nacht', 'Weekend', '24/7'].map((optie) => (
                    <div key={optie} className="flex items-center space-x-2">
                      <Checkbox
                        id={`gewensteInzet-${optie}`}
                        checked={formData.gewensteInzet.includes(optie)}
                        onCheckedChange={(checked) => handleGewensteInzetChange(optie, checked as boolean)}
                      />
                      <Label htmlFor={`gewensteInzet-${optie}`} className="text-sm font-normal">
                        {optie}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voorkeursmoment kennismaking */}
              <div className="space-y-2">
                <Label htmlFor="voorkeursmoment">Voorkeursmoment kennismaking</Label>
                <Input
                  id="voorkeursmoment"
                  type="datetime-local"
                  value={formData.voorkeursmoment}
                  onChange={(e) => handleInputChange('voorkeursmoment', e.target.value)}
                />
              </div>

              {/* Error message */}
              {isSubmitting && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">Er is iets misgegaan bij het versturen van het formulier. Probeer het later opnieuw.</p>
                </div>
              )}

              {/* Submit button */}
              <div className="space-y-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? 'Versturen...' : '🚀 Gratis voorstel aanvragen'}
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Of neem direct contact op:</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer"
                    onClick={() => window.location.href = 'tel:+31612345678'}
                  >
                    📞 Direct bellen
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 