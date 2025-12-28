import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
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
    Link as RadixLink,
    Separator,
    Section,
    IconButton
} from '@radix-ui/themes';
import { MagnifyingGlassIcon, ArrowRightIcon, HamburgerMenuIcon, Cross1Icon, ChevronDownIcon } from '@radix-ui/react-icons';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import VideoPlayer from '@/components/VideoPlayer';
import HoverCard from '@/components/HoverCard';

export default function Welcome() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

    const toggleMobileSection = (section: string) => {
        setExpandedMobileSection(expandedMobileSection === section ? null : section);
    };

    return (
        <>
            <Head title="Semara University" />
            
            <Box style={{ backgroundColor: '#020412', color: 'white', minHeight: '100vh' }}>
                {/* Navigation */}
                <Box py="4" px="6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 50 }}>
                    <Flex justify="between" align="center">
                        <Flex align="center" gap="3">
                            <Box width="40px" height="40px">
                                <img src="/images/su-logo.png" alt="Semara University Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                            <Text weight="bold" size="3" style={{ letterSpacing: '1px' }}>Semara University</Text>
                        </Flex>
                        
                        {/* Desktop Navigation */}
                        <Box display={{ initial: 'none', md: 'block' }}>
                            <NavigationMenu viewportClassName="bg-[#020412] border border-white/10 text-white rounded-xl shadow-2xl">
                                <NavigationMenuList className="gap-1">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white transition-colors")}>
                                            Home
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white transition-colors">
                                            About
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-2 p-4 w-[250px] md:w-[300px]">
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="leadership" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white text-sm font-medium">
                                                            <div className="text-sm font-medium leading-none mb-2 text-red-500">Leadership</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                                                Meet the leaders guiding our university towards excellence.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="uniOverview" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white text-sm font-medium">
                                                            <div className="text-sm font-medium leading-none mb-2 text-red-500">Uni Overview</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                                                Learn about our history, mission, and values.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white transition-colors">
                                            Academics
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-2 p-4 w-[250px] md:w-[350px]">
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="offices" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white text-sm font-medium">
                                                            <div className="text-sm font-medium leading-none mb-2 text-red-500">Offices</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                                                Administrative support and academic services.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="collages" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white text-sm font-medium">
                                                            <div className="text-sm font-medium leading-none mb-2 text-red-500">Colleges</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                                                Explore our diverse undergraduate colleges.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="schools" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white text-sm font-medium">
                                                            <div className="text-sm font-medium leading-none mb-2 text-red-500">Schools</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                                                Graduate and professional schools.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white transition-colors">
                                            Research
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-2 p-4 w-[250px] md:w-[300px]">
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="researchcenter" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white text-sm font-medium">
                                                            <div className="text-sm font-medium leading-none mb-2 text-red-500">Research Center</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                                                Discover our cutting-edge facilities and innovative projects driving global impact.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="researchoffices" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white text-sm font-medium">
                                                            <div className="text-sm font-medium leading-none mb-2 text-red-500">Research Offices</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
Administrative support for grants, ethics compliance, and research development.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="registrar" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white transition-colors")}>
                                            Registrar
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="students" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white transition-colors")}>
                                            Students
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="blog" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white transition-colors")}>
                                            Blog
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </Box>

                        {/* Mobile Menu Toggle */}
                        <Box display={{ initial: 'block', md: 'none' }}>
                            <IconButton 
                                variant="ghost" 
                                color="gray" 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                style={{ color: 'white' }}
                            >
                                {isMobileMenuOpen ? <Cross1Icon width="24" height="24" /> : <HamburgerMenuIcon width="24" height="24" />}
                            </IconButton>
                        </Box>
                    </Flex>

                    {/* Mobile Menu Overlay */}
                    {isMobileMenuOpen && (
                        <Box 
                            style={{ 
                                position: 'absolute', 
                                top: '100%', 
                                left: 0, 
                                right: 0, 
                                backgroundColor: '#020412', 
                                padding: '20px', 
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                zIndex: 40
                            }}
                        >
                            <Flex direction="column" gap="4">
                                <RadixLink href="/" style={{ color: 'white', fontSize: '16px' }}>Home</RadixLink>
                                
                                <Box>
                                    <Flex 
                                        justify="between" 
                                        align="center" 
                                        onClick={() => toggleMobileSection('about')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Text size="3" weight="bold" style={{ color: 'white' }}>About</Text>
                                        <ChevronDownIcon 
                                            width="20" 
                                            height="20" 
                                            style={{ 
                                                transform: expandedMobileSection === 'about' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.2s',
                                                color: 'white'
                                            }} 
                                        />
                                    </Flex>
                                    
                                    {expandedMobileSection === 'about' && (
                                        <Flex direction="column" gap="2" pl="3" mt="2">
                                            <RadixLink href="/leadership" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Leadership</RadixLink>
                                            <RadixLink href="/unioverview" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Uni Overview</RadixLink>
                                        </Flex>
                                    )}
                                </Box>

                                <Box>
                                    <Flex 
                                        justify="between" 
                                        align="center" 
                                        onClick={() => toggleMobileSection('academics')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Text size="3" weight="bold" style={{ color: 'white' }}>Academics</Text>
                                        <ChevronDownIcon 
                                            width="20" 
                                            height="20" 
                                            style={{ 
                                                transform: expandedMobileSection === 'academics' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.2s',
                                                color: 'white'
                                            }} 
                                        />
                                    </Flex>
                                    
                                    {expandedMobileSection === 'academics' && (
                                        <Flex direction="column" gap="2" pl="3" mt="2">
                                            <RadixLink href="/offices" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Offices</RadixLink>
                                            <RadixLink href="/colleges" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Colleges</RadixLink>
                                            <RadixLink href="/schools" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Schools</RadixLink>
                                        </Flex>
                                    )}
                                </Box>

                                <Box>
                                    <Flex 
                                        justify="between" 
                                        align="center" 
                                        onClick={() => toggleMobileSection('research')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Text size="3" weight="bold" style={{ color: 'white' }}>Research</Text>
                                        <ChevronDownIcon 
                                            width="20" 
                                            height="20" 
                                            style={{ 
                                                transform: expandedMobileSection === 'research' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.2s',
                                                color: 'white'
                                            }} 
                                        />
                                    </Flex>
                                    
                                    {expandedMobileSection === 'research' && (
                                        <Flex direction="column" gap="2" pl="3" mt="2">
                                            <RadixLink href="researchcenter" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Research Center</RadixLink>
                                            <RadixLink href="researchoffices" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Research Offices</RadixLink>
                                        </Flex>
                                    )}
                                </Box>
                                <RadixLink href="#" style={{ color: 'white', fontSize: '16px' }}>Registrar</RadixLink>
                                <RadixLink href="#" style={{ color: 'white', fontSize: '16px' }}>Students</RadixLink>
                                <RadixLink href="#" style={{ color: 'white', fontSize: '16px' }}>Blog</RadixLink>
                                <RadixLink href="#" style={{ color: 'white', fontSize: '16px' }}>Contact</RadixLink>
                            </Flex>
                        </Box>
                    )}
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
                                <Text>From The Land of Origin</Text>
                            </Box>
                            
                            <Heading size="9" align="center" style={{ fontWeight: 400, fontSize: '4rem', lineHeight: 1.1 }}>
                                We Serve the  <br />
                                <span style={{ color: '#D42A38', fontStyle: 'italic', fontFamily: 'serif' }}>Community.</span>
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
                
                {/*introduction Section */}
                <Section size="3" style={{ backgroundColor: '#020412', color: 'white' }}>
                    <Container size="4">
                        <Box mb="8">
                            <Text size="2" style={{ color: '#D42A38', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Meet Your Community</Text>
                            <Heading size="8" style={{ marginTop: '8px', lineHeight: 1.2 }}>
                                Afar is not far.
                            </Heading>
                        </Box>
                        
                        <Grid columns={{ initial: '1', lg: '2' }} gap="9" align="center">
                            {/* Video Card */}
                            <VideoPlayer src="/images/su_video.mp4" poster="/images/suvideo_poster.png" />
                            
                            {/* Content */}
                            <Flex direction="column" justify="between">
                                <Box mb="6">
                                    <Heading size="5" mb="2">Serving our community</Heading>
                                </Box>
                                
                                <Grid columns={{ initial: '1', sm: '2' }} gap="4">
                                    <HoverCard icon="🏠" title="2,000+ Homes" subtitle="Preserved or created" />
                                    <HoverCard icon="🎓" title="1st Partner" subtitle="To public schools" />
                                    <HoverCard icon="💼" title="Top Employer" subtitle="In Cambridge" />
                                    <HoverCard icon="🤝" title="Local Action" subtitle="New initiatives" />
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
