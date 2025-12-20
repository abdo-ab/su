import { Head } from '@inertiajs/react';
import { 
    Box, 
    Flex, 
    Text, 
    Heading, 
    Button, 
    Container, 
    TextField, 
    Grid,
    Card,
    Inset,
    Avatar,
    Link as RadixLink,
    Separator,
    Section
} from '@radix-ui/themes';
import { MagnifyingGlassIcon, ArrowRightIcon } from '@radix-ui/react-icons';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            
            <Box style={{ backgroundColor: '#020412', color: 'white', minHeight: '100vh' }}>
                {/* Navigation */}
                <Box py="4" px="6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <Flex justify="between" align="center">
                        <Flex align="center" gap="2">
                            <Box width="20px" height="20px" style={{ backgroundColor: '#D42A38', borderRadius: '4px' }} />
                            <Text weight="bold" size="3" style={{ letterSpacing: '1px' }}>HARVARD</Text>
                        </Flex>
                        
                        <Flex gap="5" display={{ initial: 'none', sm: 'flex' }}>
                            <RadixLink href="#" color="gray" highContrast={false} style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Admissions</RadixLink>
                            <RadixLink href="#" color="gray" highContrast={false} style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Campus</RadixLink>
                            <RadixLink href="#" color="gray" highContrast={false} style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Research</RadixLink>
                            <RadixLink href="#" color="gray" highContrast={false} style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Alumni</RadixLink>
                        </Flex>

                        <Flex gap="3" align="center">
                             <Avatar size="1" fallback="U" radius="full" color="gray" variant="solid" />
                        </Flex>
                    </Flex>
                </Box>

                {/* Hero Section */}
                <Section size="3" pt="9" pb="9">
                    <Container size="3">
                        <Flex direction="column" align="center" gap="6">
                            <Box style={{ 
                                backgroundColor: 'rgba(255,255,255,0.1)', 
                                padding: '4px 12px', 
                                borderRadius: '9999px',
                                fontSize: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                <Text>Est. 1636 • Cambridge, MA</Text>
                            </Box>
                            
                            <Heading size="9" align="center" style={{ fontWeight: 400, fontSize: '4rem', lineHeight: 1.1 }}>
                                Truth For The <br />
                                <span style={{ color: '#D42A38', fontStyle: 'italic', fontFamily: 'serif' }}>Future.</span>
                            </Heading>
                            
                            <Text align="center" size="3" color="gray" style={{ maxWidth: '500px', lineHeight: 1.6 }}>
                                Dedicated to excellence in teaching, learning, and research, 
                                and to developing leaders in many disciplines.
                            </Text>

                            <Box width="100%" maxWidth="600px" mt="6" p="6" style={{ 
                                border: '1px solid rgba(255,255,255,0.1)', 
                                borderRadius: '16px',
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)'
                            }}>
                                <Flex direction="column" gap="4">
                                    <Text size="2" color="gray">Explore the university website</Text>
                                    <Flex gap="2">
                                        <TextField.Root size="3" placeholder="Search courses, people, news..." style={{ flexGrow: 1, backgroundColor: 'rgba(255,255,255,0.05)', border: 'none', color: 'white' }}>
                                            <TextField.Slot>
                                                <MagnifyingGlassIcon height="16" width="16" />
                                            </TextField.Slot>
                                        </TextField.Root>
                                        <Button size="3" variant="solid" style={{ backgroundColor: '#D42A38', color: 'white' }}>
                                            Search
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    </Container>
                </Section>
                
                {/* Neighbor Section */}
                <Section size="3" style={{ backgroundColor: '#020412' }}>
                    <Container size="4">
                        <Box mb="6">
                            <Text size="2" style={{ color: '#D42A38', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Local Community</Text>
                            <Heading size="8" style={{ marginTop: '8px', lineHeight: 1.2 }}>
                                Harvard is not an island.<br />
                                <span style={{ color: 'gray' }}>We are a neighbor.</span>
                            </Heading>
                        </Box>
                        
                        <Grid columns={{ initial: '1', md: '2' }} gap="8">
                            {/* Video Card */}
                            <Box style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/9' }}>
                                <img src="/images/office.png" alt="Office Meeting" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                                <Flex align="center" justify="center" style={{ position: 'absolute', inset: 0 }}>
                                    <Box style={{ 
                                        width: '64px', 
                                        height: '64px', 
                                        borderRadius: '50%', 
                                        backgroundColor: 'rgba(255,255,255,0.2)', 
                                        backdropFilter: 'blur(4px)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}>
                                        <Box style={{ borderLeft: '16px solid white', borderTop: '10px solid transparent', borderBottom: '10px solid transparent' }} />
                                    </Box>
                                </Flex>
                                <Box style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 12px', borderRadius: '4px' }}>
                                    <Text size="1" weight="bold">SEE OUR COMMUNITY</Text>
                                </Box>
                            </Box>
                            
                            {/* Content */}
                            <Flex direction="column" justify="between">
                                <Box mb="6">
                                    <Heading size="5" mb="2">Serving our community</Heading>
                                    <Text size="3" color="gray" style={{ lineHeight: 1.6 }}>
                                        Harvard is deeply engaged in the community, working with partners to create affordable housing, advance public schools, and support local jobs.
                                    </Text>
                                    <RadixLink href="#" style={{ color: '#D42A38', marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                        Read the full report <ArrowRightIcon />
                                    </RadixLink>
                                </Box>
                                
                                <Grid columns="2" gap="4">
                                    <Card style={{ backgroundColor: '#0A0C16', borderColor: 'rgba(255,255,255,0.1)' }}>
                                        <Flex direction="column" gap="1">
                                            <Box width="32px" height="32px" style={{ backgroundColor: 'rgba(212, 42, 56, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                                                <Text size="3">🏠</Text>
                                            </Box>
                                            <Heading size="3">2,000+ Homes</Heading>
                                            <Text size="1" color="gray">Preserved or created</Text>
                                        </Flex>
                                    </Card>
                                    <Card style={{ backgroundColor: '#0A0C16', borderColor: 'rgba(255,255,255,0.1)' }}>
                                        <Flex direction="column" gap="1">
                                            <Box width="32px" height="32px" style={{ backgroundColor: 'rgba(212, 42, 56, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                                                <Text size="3">🎓</Text>
                                            </Box>
                                            <Heading size="3">1st Partner</Heading>
                                            <Text size="1" color="gray">To public schools</Text>
                                        </Flex>
                                    </Card>
                                    <Card style={{ backgroundColor: '#0A0C16', borderColor: 'rgba(255,255,255,0.1)' }}>
                                        <Flex direction="column" gap="1">
                                            <Box width="32px" height="32px" style={{ backgroundColor: 'rgba(212, 42, 56, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                                                <Text size="3">💼</Text>
                                            </Box>
                                            <Heading size="3">Top Employer</Heading>
                                            <Text size="1" color="gray">In Cambridge</Text>
                                        </Flex>
                                    </Card>
                                    <Card style={{ backgroundColor: '#0A0C16', borderColor: 'rgba(255,255,255,0.1)' }}>
                                        <Flex direction="column" gap="1">
                                            <Box width="32px" height="32px" style={{ backgroundColor: 'rgba(212, 42, 56, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                                                <Text size="3">🤝</Text>
                                            </Box>
                                            <Heading size="3">Local Action</Heading>
                                            <Text size="1" color="gray">New initiatives</Text>
                                        </Flex>
                                    </Card>
                                </Grid>
                            </Flex>
                        </Grid>
                    </Container>
                </Section>

                {/* Impact Section */}
                <Section size="3">
                   <Container size="4">
                        <Box mb="6">
                            <Heading size="8" style={{ lineHeight: 1.2 }}>Impact in Action</Heading>
                            <Flex gap="4" mt="4">
                                <Text size="2" color="gray">Global Reach</Text>
                                <Text size="2" color="gray">Research</Text>
                                <Text size="2" color="gray">Innovation</Text>
                            </Flex>
                        </Box>

                        <Grid columns={{ initial: '1', md: '3' }} gap="4" style={{ height: '500px' }}>
                             {/* Map Card */}
                             <Box style={{ gridColumn: 'span 2', position: 'relative', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#080808', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/map.png" alt="Global Impact" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                                <Box style={{ position: 'absolute', top: '30px', left: '30px' }}>
                                    <Text size="1" style={{ color: '#D42A38', fontWeight: 'bold' }}>GLOBAL HEALTH</Text>
                                    <Heading size="6" mt="2">Combating infectious diseases</Heading>
                                </Box>
                             </Box>

                             {/* Phone Card */}
                             <Box style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#080808', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/phone.png" alt="Mobile App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <Box style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                                    <Text size="1" style={{ backgroundColor: '#D42A38', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>INNOVATION</Text>
                                    <Heading size="5" mt="2">Tech for good</Heading>
                                    <Text size="2" color="gray" mt="1">New apps helping patients monitor health.</Text>
                                </Box>
                             </Box>
                        </Grid>
                   </Container>
                </Section>

                {/* Inspiring Section */}
                <Section size="3" style={{ backgroundColor: '#020412' }}>
                    <Container size="4">
                         <Box mb="6">
                            <Heading size="8" style={{ lineHeight: 1.2 }}>Inspiring the next generation</Heading>
                        </Box>

                        <Grid columns={{ initial: '1', md: '2' }} gap="8" align="center">
                             <Box style={{ borderRadius: '24px', overflow: 'hidden' }}>
                                 <img src="https://placehold.co/600x600/222/fff?text=Teacher+Portrait" alt="Inspiring Teacher" style={{ width: '100%', display: 'block' }} />
                                 <Box p="2" style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                                      <Box style={{ backgroundColor: '#D42A38', padding: '4px 12px', borderRadius: '9999px', display: 'inline-block' }}>
                                        <Text size="1" weight="bold">INSPIRE</Text>
                                      </Box>
                                 </Box>
                             </Box>

                             <Flex direction="column" gap="4">
                                 <Text size="8" style={{ color: '#D42A38', fontFamily: 'serif', fontSize: '4rem', lineHeight: 1 }}>”</Text>
                                 <Heading size="7" style={{ fontWeight: 400 }}>
                                     "I always felt it was important to give back. We have to lift as we climb."
                                 </Heading>
                                 <Box style={{ borderLeft: '2px solid #D42A38', paddingLeft: '16px' }}>
                                     <Text size="3" weight="bold">Alex Tbet</Text>
                                     <Text size="2" color="gray" as="p">
                                         A teacher who returned to his community to mentor the next generation.
                                     </Text>
                                 </Box>
                                 <RadixLink href="#" style={{ color: '#D42A38', marginTop: '8px' }}>
                                     Read more stories <ArrowRightIcon />
                                 </RadixLink>
                             </Flex>
                        </Grid>
                    </Container>
                </Section>

                {/* Project Swim */}
                <Section size="3">
                    <Container size="4">
                        <Grid columns={{ initial: '1', md: '2' }} gap="6">
                             <Box style={{ borderRadius: '16px', overflow: 'hidden', height: '300px' }}>
                                 <img src="https://placehold.co/800x600/003366/fff?text=Swimmer" alt="Swimming Pool" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                             </Box>
                             <Flex direction="column" justify="center" gap="3">
                                <Flex gap="3">
                                     <Box width="80px" height="60px" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                        <img src="https://placehold.co/100x100/333/fff?text=Img1" alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                     </Box>
                                      <Box width="80px" height="60px" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                        <img src="https://placehold.co/100x100/333/fff?text=Img2" alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                     </Box>
                                </Flex>
                                <Box style={{ backgroundColor: 'white', height: '1px', width: '40px', margin: '16px 0' }} />
                                <Heading size="6">Project Swim</Heading>
                                <Text size="2" color="gray">
                                    Providing swimming lessons to local youth, ensuring safety and confidence in the water.
                                </Text>
                                <RadixLink href="#" style={{ color: 'white', textDecoration: 'underline' }}>Watch the video</RadixLink>
                             </Flex>
                        </Grid>
                    </Container>
                </Section>
                
                {/* Civic Duty Section */}
                <Section size="3" style={{ backgroundColor: '#020412' }}>
                     <Container size="4">
                        <Box mb="6">
                            <Heading size="8" style={{ lineHeight: 1.2 }}>Doing their civic duty</Heading>
                        </Box>
                        
                        <Grid columns={{ initial: '1', md: '2' }} gap="8" align="center">
                            <Flex direction="column" gap="4">
                                 <Text size="8" style={{ color: '#D42A38', fontFamily: 'serif', fontSize: '4rem', lineHeight: 1 }}>”</Text>
                                 <Heading size="7" style={{ fontWeight: 400 }}>
                                     "I'm going to be able to use the vehicle of the law to help people."
                                 </Heading>
                                 <Box style={{ borderLeft: '2px solid #D42A38', paddingLeft: '16px' }}>
                                     <Text size="3" weight="bold">David Evans</Text>
                                     <Text size="2" color="gray" as="p">
                                         Law student and community organizer, using his education to advocate for justice.
                                     </Text>
                                 </Box>
                                 <RadixLink href="#" style={{ color: '#D42A38', marginTop: '8px' }}>
                                     See full interaction <ArrowRightIcon />
                                 </RadixLink>
                             </Flex>
                             
                             <Box style={{ borderRadius: '24px', overflow: 'hidden' }}>
                                 <img src="https://placehold.co/600x600/444/fff?text=David+Portrait" alt="David Evans" style={{ width: '100%', display: 'block' }} />
                                  <Box p="2" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                                      <Box style={{ backgroundColor: '#D42A38', padding: '4px 12px', borderRadius: '9999px', display: 'inline-block' }}>
                                        <Text size="1" weight="bold">ADVOCATE</Text>
                                      </Box>
                                 </Box>
                             </Box>
                        </Grid>
                     </Container>
                </Section>

                {/* Footer and Dedicated Section */}
                <Section size="3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Container size="4">
                        <Flex direction="column" gap="8">
                             <Box>
                                 <Heading size="8">Dedicated to making<br />a difference</Heading>
                                 <Text size="3" color="gray" mt="4" style={{ maxWidth: '600px' }}>
                                     From the sciences to the humanities, our community is driven by a shared purpose to make the world a better place.
                                 </Text>
                             </Box>

                             <Grid columns={{ initial: '2', sm: '4' }} gap="5">
                                 <Flex direction="column" gap="3">
                                     <Text weight="bold" size="2" color="gray">OPPORTUNITIES</Text>
                                     <RadixLink href="#" color="gray">Admissions & Aid</RadixLink>
                                     <RadixLink href="#" color="gray">Undergraduate</RadixLink>
                                     <RadixLink href="#" color="gray">Graduate</RadixLink>
                                     <RadixLink href="#" color="gray">Professional</RadixLink>
                                 </Flex>
                                  <Flex direction="column" gap="3">
                                     <Text weight="bold" size="2" color="gray">COMMUNITY</Text>
                                     <RadixLink href="#" color="gray">Students</RadixLink>
                                     <RadixLink href="#" color="gray">Faculty & Staff</RadixLink>
                                     <RadixLink href="#" color="gray">Alumni</RadixLink>
                                     <RadixLink href="#" color="gray">Parents</RadixLink>
                                 </Flex>
                                  <Flex direction="column" gap="3">
                                     <Text weight="bold" size="2" color="gray">RESOURCES</Text>
                                     <RadixLink href="#" color="gray">Libraries & Museums</RadixLink>
                                     <RadixLink href="#" color="gray">Campus Map</RadixLink>
                                     <RadixLink href="#" color="gray">Directory</RadixLink>
                                     <RadixLink href="#" color="gray">Events</RadixLink>
                                 </Flex>
                                  <Flex direction="column" gap="3">
                                     <Text weight="bold" size="2" color="gray">ABOUT</Text>
                                     <RadixLink href="#" color="gray">University Leadership</RadixLink>
                                     <RadixLink href="#" color="gray">History</RadixLink>
                                     <RadixLink href="#" color="gray">Jobs</RadixLink>
                                     <RadixLink href="#" color="gray">Contact</RadixLink>
                                 </Flex>
                             </Grid>
                             
                             <Separator size="4" />
                             
                             <Flex justify="between" align="center" direction={{ initial: 'column', sm: 'row' }} gap="4">
                                 <Flex align="center" gap="2">
                                     <Box width="20px" height="20px" style={{ backgroundColor: '#D42A38', borderRadius: '4px' }} />
                                     <Text weight="bold" size="2">HARVARD UNIVERSITY</Text>
                                 </Flex>
                                 <Text size="1" color="gray">© 2025 The President and Fellows of Harvard College</Text>
                                 <Flex gap="4">
                                     <Text size="1">FB</Text>
                                     <Text size="1">TW</Text>
                                     <Text size="1">IG</Text>
                                     <Text size="1">LI</Text>
                                     <Text size="1">YT</Text>
                                 </Flex>
                             </Flex>
                        </Flex>
                    </Container>
                </Section>
            </Box>
        </>
    );
}
